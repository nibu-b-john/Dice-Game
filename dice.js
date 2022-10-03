"use strict";

function generateRandomNumbers() {
  return Math.floor(Math.random() * 6) + 1;
}

function changeDicePic(index, randomNumber) {
  document
    .querySelectorAll("img")
    [index].setAttribute("src", "images/dice" + randomNumber + ".png");
}

const rollDice = document.getElementsByTagName("button")[0];
rollDice.addEventListener("click", () => {
  var randomNumber1 = generateRandomNumbers();
  var randomNumber2 = generateRandomNumbers();
  changeDicePic(0, randomNumber1);
  changeDicePic(1, randomNumber2);
  if (randomNumber1 > randomNumber2) {
    document.querySelectorAll("h1")[0].innerHTML = "⬅ Player1 Wins";
  } else {
    document.querySelectorAll("h1")[0].innerHTML = "Player2 Wins ➡";
  }
});
