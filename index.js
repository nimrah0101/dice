var randomNumber1
randomNumber1 =Math.ceil(Math.random() * 6);

var dice1 = "images/dice" +  randomNumber1 + ".png";

// var image1 = document.querySelectorAll("img")[0];
//
// image1.setAttribute("src", dice);

document.querySelector(".img1").setAttribute("src", dice1);

var randomNumber2 = Math.ceil(Math.random() * 6);

var dice2= "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", dice2);

if(dice1===dice2){
  document.querySelector("h1").innerHTML = "🎲 It is a draw! 🎲"
}else if(dice1> dice2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}else if(dice1<dice2){
  document.querySelector("h1").innerHTML ="Player 2 Wins! 🚩"
}
