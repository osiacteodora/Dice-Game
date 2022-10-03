
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImage1 = "images/" + randomDiceImage1;
var randomImage2 = "images/" + randomDiceImage2;
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImage1);
image2.setAttribute("src", randomImage2);

var title = document.querySelectorAll("h1")[0];

if (randomNumber1 > randomNumber2) title.innerHTML = "Player one wins";
else if (randomNumber1 < randomNumber2) title.innerHTML = "Player two wins";
else title.innerHTML = "DRAW !"

