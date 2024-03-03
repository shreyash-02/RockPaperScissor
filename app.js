let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); //used in showWinner()

//for accessing score board
const  userScorePara= document.querySelector("#user-score");
const  compScorePara= document.querySelector("#comp-score");


// genrating computer choice using Math.random fxn
const getCompChoice = ()=>{
    const options =["rock","paper","scissors"];
    const randomIdx= Math.floor(Math.random()*3); //for chossing random idx from 0 to 2 of above options array
    return options[randomIdx];
};

//for draw condition
const drawGame = () =>{
   console.log("game was draw.")
   msg.innerText ="Game was Draw, Play Again";
   msg.style.backgroundColor = "#081b31";
};

//printing/updating result on message
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  };


//comparing user choice and comp choice
const playGame = (userChoice)=>{
    console.log("user choice= ",userChoice);
    const compChoice = getCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp choice will be = scissors, paper , rock nhi hoskti nhi to draw ho jata uper wali condition se
            userWin = compChoice ==="paper"? false : true;    //agar compchoice paper he to userwin false ho jayega mtlb har jayega 
            //nhi to jit jayega kyuki paper nhi hua to scissor hoga or user jit jayega , user choice true he rahegi
        }else if(userChoice ==="paper"){
            //comp choice = rock,scissor
            userWin = compChoice ==="scissors"? false : true; 
        }else{
            //else me rock hogya , paper hogya ,to (userChoice===scissors) hoga 
            //computer choice= rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

//geting user choice by click
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice)
    });
});