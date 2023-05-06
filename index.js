// Bunch of variables

var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

// Manipulating the DOM
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");




// Showing the result of the game
if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "Player 1 wins"

} else if (randomNumber2 === randomNumber1) {
	document.querySelector("h1").innerHTML = "No one wins"

} else {
	document.querySelector("h1").innerHTML = "Player 2 wins"
	console.log("Player 2 won");
}

// For Debuggin purposes
console.log(randomNumber1);
console.log(randomNumber2);
