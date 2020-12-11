let playerScore = 0;
let computerScore = 0;
let numOfRounds = 0;

document.getElementById("rock").addEventListener("click", function() {
								playRound("rock");
								});
document.getElementById("paper").addEventListener("click", function() {
								playRound("paper");
								});
document.getElementById("scissors").addEventListener("click", function() {
								playRound("scissors");
								});

function computerPlay() {
	    /* document.getElementById("rock").innerHTML = "ROCK"; */
            /* console.log("this showed up."); */
            let turnValue = Math.floor((Math.random() * 3) + 1);
            if (turnValue === 1) {
                return "Rock";
            }
            else if (turnValue === 2) {
                return "Paper";
            }
            else {
                return "Scissors";
            }
        }


/* you could in each return statement .innerHTML each round description and the round scores */

function playRound(playerSelection) {
            let loweredPlayerSelection = playerSelection.toLowerCase();
	    let computerSelection = computerPlay();

            if (loweredPlayerSelection === "rock") {
                if (computerSelection === "Scissors") {
		    document.getElementById("post-round-message").innerHTML = `You Won! Rock beats ${computerSelection}`;
                    document.getElementById("player-count").innerHTML = ++playerScore;
                    /* return [1, `You Won! Rock beats ${computerSelection}`]; */
                }
                else if (computerSelection === "Rock") {
                    document.getElementById("post-round-message").innerHTML = `You Tied! Rock neutralizes ${computerSelection}`;
                    document.getElementById("player-count").innerHTML = playerScore += 0.5;
                    document.getElementById("computer-count").innerHTML = computerScore += 0.5;
	            /* numofties++; */
                    /* return [0, `You Tied. Rock neutralizes Rock`]; */
                }
                else {
                    document.getElementById("post-round-message").innerHTML = `You Lost! ${computerSelection} beats Rock`;
                    document.getElementById("computer-count").innerHTML = ++computerScore;
                    /* return [-1, `You Lost. ${computerSelection} beats Rock`]; */
                }
            }
            else if (loweredPlayerSelection === "paper") {
                if (computerSelection === "Rock") {
		    document.getElementById("post-round-message").innerHTML = `You Won! Paper beats ${computerSelection}`;
                    document.getElementById("player-count").innerHTML = ++playerScore;
                    /* return [1, `You Won! Paper beats ${computerSelection}`]; */
                }
                else if (computerSelection === "Paper") {
                    document.getElementById("post-round-message").innerHTML = `You Tied! Paper neutralizes ${computerSelection}`;
                    document.getElementById("player-count").innerHTML = playerScore += 0.5;
                    document.getElementById("computer-count").innerHTML = computerScore += 0.5;
                    /* numofties++; */
                    /* return [0, `You Tied. Paper neutralizes Paper`]; */
                }
                else {
                    document.getElementById("post-round-message").innerHTML = `You Lost! ${computerSelection} beats Paper`;
                    document.getElementById("computer-count").innerHTML = ++computerScore;
                    /* return [-1, `You Lost. ${computerSelection} beats Paper`]; */
                }
            }
            else {
                if (computerSelection === "Paper") {
                    document.getElementById("post-round-message").innerHTML = `You Won! Scissors beats ${computerSelection}`;
                    document.getElementById("player-count").innerHTML = ++playerScore;
                    /* return [1, `You Won! Scissors beats ${computerSelection}`]; */
                }
                else if (computerSelection === "Scissors") {
                    document.getElementById("post-round-message").innerHTML = `You Tied! Scissors neutralizes ${computerSelection}`;
                    document.getElementById("player-count").innerHTML = playerScore += 0.5;
                    document.getElementById("computer-count").innerHTML = computerScore += 0.5;
                    /* numofties++; */
                    /* return [0, `You Tied. Scissors neutralizes Scissors`]; */
                }
                else {
                    document.getElementById("post-round-message").innerHTML = `You Lost! ${computerSelection} beats Scissors`;
                    document.getElementById("computer-count").innerHTML = ++computerScore;
                    /* return [-1, `You Lost. ${computerSelection} beats Scissors`]; */
                }
            }

	    /* need to check whether either count === 5 - (0.5*num of ties*2), then say who won, then ask 
			with a new button that pops up that says ''play again'
				also need to grey out reg buttons when game is finished */
	    numOfRounds++;		

	    if (numOfRounds === 5) {
		if (playerScore > computerScore) {
			document.getElementById("final-result").innerHTML = `You won the match! ${playerScore} - ${computerScore}`;
		}
		else if (playerScore < computerScore) {
			document.getElementById("final-result").innerHTML = `You lost the match! ${playerScore} - ${computerScore}`;
		}
		else {
			document.getElementById("final-result").innerHTML = `You tied the match. ${playerScore} - ${computerScore}`;
		}
		document.getElementById("rock").disabled = true;
		document.getElementById("paper").disabled = true;
		document.getElementById("scissors").disabled = true;
		
		let linebreak = document.createElement("br");

		let restartGameButton = document.createElement("BUTTON");
		restartGameButton.id = "new-game";
		let restartGameButtonInnerText = document.createTextNode("Play Again"); 
		restartGameButton.appendChild(restartGameButtonInnerText);
		document.getElementById("final-result").appendChild(linebreak);
		document.getElementById("final-result").appendChild(restartGameButton);

		document.getElementById("new-game").addEventListener("click", function() {
								resetGameValues();
								});
	    }
        }

function resetGameValues() {
	playerScore = 0;
	computerScore = 0;
	numOfRounds = 0;
	document.getElementById("rock").disabled = false;
	document.getElementById("paper").disabled = false;
	document.getElementById("scissors").disabled = false;
	document.getElementById("post-round-message").innerHTML = "<br>";
	document.getElementById("player-count").innerHTML = 0;
        document.getElementById("computer-count").innerHTML = 0;
	document.getElementById("final-result").innerHTML = "";
	document.getElementById("final-result").removeChild(restartGameButton);

}

function game() {
            /* this is a string, at what point is ----> playerSelection is undefined <---- */
            let playerInputChoice;

            let playerScore = 0;
            let computerScore = 0;

            for (let i = 0; i < 5; i++) {
		/* could try to have this prompt here turn into waiting for value from a button click */
                playerInputChoice = prompt("Enter your choice: ");
                let currentRound = playRound(playerInputChoice, computerPlay());
                
                if (currentRound[0] === 1) {
                    playerScore++;
                    console.log(currentRound[1]);
                }
                else if (currentRound[0] === 0) {
		    playerScore += 0.5;
                    computerScore += 0.5;
                    console.log(currentRound[1]);
                }
                else {
                    computerScore++;
                    console.log(currentRound[1]);
                }
		
            }

            if (playerScore > computerScore) {
                console.log(`You won the match! ${playerScore} - ${computerScore}`);
            }
            else if (playerScore < computerScore) {
                console.log(`You lost the match! ${playerScore} - ${computerScore}`);
            }
            else {
                console.log(`You tied the match. ${playerScore} - ${computerScore}`);
            }
        }

