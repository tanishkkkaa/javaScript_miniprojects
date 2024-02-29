let cards = [];
let isAlive = false;
let hasBlackJack = false;
let sum = 0;
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");
let messageEl = document.getElementById("message-el");

let player = {
  name: "Tanishka",
  chips: 500
};
playerEl.textContent = player.name + ": " + "$" + player.chips;

function startGame() {
  let firstCard = getRandom();
  let secondCard = getRandom();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += " " + cards[i];
  }
  sumEl.textContent = "Sum: " + sum
  if (sum < 21) {
    messageEl.textContent = "Do you want to draw a new card?"
  } else if (sum === 21) {
    messageEl.textContent = "You've got Blackjack!"
    hasBlackJack = true;
    player.chips += 100;
    playerEl.textContent = player.name + ": " + "$" + player.chips; 
  } else {
    messageEl.textContent = "You're out of the game!"
    isAlive = false;
    player.chips -= 100;
    playerEl.textContent = player.name + ": " + "$" + player.chips; 
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandom();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function getRandom() {
  randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
