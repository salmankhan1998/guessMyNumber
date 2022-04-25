'use strict';
//Buttons
let checkBtn = document.querySelector(".check");
let playAgainBtn = document.querySelector(".again");

// Formula : Math.trunc(Math.random() * (max - min) ) + min
let number = Math.trunc(Math.random() * (20 - 1)) + 1;
let score = 20; 
let highScore = 0;

// Function for displaying message
const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

checkBtn.addEventListener('click', function(){

    const guess = Number(document.querySelector(".guess").value);

    if(!guess){
        displayMessage("⛔ No number");
    }
    else if(guess === number){
        displayMessage("Congratulations 😊");
        document.querySelector(".number").textContent = number;
        document.body.style.backgroundColor = "red";
         
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        } 
        
    }
    else if (guess !== number){
        if(score > 1){
            // message.textContent = guess > number ? "Number is too high 😥" : "Number is too low 😟";
            guess > number ? displayMessage("Number is too high 😥") : displayMessage("Number is too low 😟");

            score--;
            document.querySelector(".score").textContent = score;
           }
           else{
                // message.textContent = "You lost the game 🧨";
                displayMessage("You lost the game 🧨");
                document.querySelector(".score").textContent = 0;
           }
    }
    // else if(guess > number){
    //    if(score > 1){
    //     message.textContent ="Number is too high 😟";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //    }
    //    else{
    //         message.textContent = "You lost the game 🧨";
    //         document.querySelector(".score").textContent = 0;
    //    }

    // }
    // else if(guess < number){
    //    if(score > 1){
    //     message.textContent ="Number is too low 😟";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //    }
    //    else{
    //     message.textContent = "You lost the game 🧨";
    //     document.querySelector(".score").textContent = 0;
    //    }
    // }
});

playAgainBtn.addEventListener('click', function(){
    score = 20;
    number = Math.trunc(Math.random() * (20 - 1)) + 1;
    // message.textContent = "Start guessing...";
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = '';
    document.querySelector(".number").textContent = "?";
    document.body.style.backgroundColor = "#222";

    console.log(number);
});