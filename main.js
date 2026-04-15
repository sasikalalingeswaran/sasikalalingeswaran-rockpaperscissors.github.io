const game=()=>{
    let playerScores=0
    let computerScore=0
    let moves=0
    const playGame=() => {
        const rockbtn=document.getElementById('rock')
        const paperbtn=document.getElementById('paper')
        const scissorsbtn=document.getElementById('scissors')
        const playerOptions=[rockbtn,paperbtn,scissorsbtn]
        const computerOptions=['rock','paper','scissors']
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
                const movesLeft=document.getElementById('movesleft')
                moves++
                movesLeft.innerText=`Total Moves : ${10-moves}`
                const Choice=Math.floor(Math.random()*3)
                const ComputerChoice=computerOptions[Choice]
                winner(this.id,ComputerChoice)
                if(moves==10){
                    gameOver(playerOptions,movesLeft)
                }
            });
        })
    }
    const winner=(player,computer)=>{
        const playerScoreBoard=document.getElementById('playscores')
        const compScoreBoard=document.getElementById('compscores')
        const result=document.getElementById('result')
        player=player.toLowerCase()
        computer=computer.toLowerCase()
        if(player===computer){
            result.textContent='Tie'
        }
        else if(player=='rock'){
            if(computer=='paper'){
                result.textContent='Computer Wins'
                computerScore++
                compScoreBoard.textContent=computerScore
            }
            else{
                result.textContent='Player Wins'
                playerScores++
                playerScoreBoard.textContent=playerScores
            }
        }
         else if(player=='scissors'){
            if(computer=='rock'){
                result.textContent='Computer Wins'
                computerScore++
                compScoreBoard.textContent=computerScore
            }
            else{
                result.textContent='Player Wins'
                playerScores++
                playerScoreBoard.textContent=playerScores
            }
        }
         else if(player=='paper'){
            if(computer=='scissors'){
                result.textContent='Computer Wins'
                computerScore++
                compScoreBoard.textContent=computerScore
            }
            else{
                result.textContent='Player Wins'
                playerScores++
                playerScoreBoard.textContent=playerScores
            }
        }
    }
    const gameOver = (playerOptions,movesLeft) => {
        const gameover=document.getElementById('gameover')
        const result=document.getElementById('finalresult')
        const finalresult=document.getElementById('result')
        const reloadbtn=document.getElementById('reload')
        const popup=document.getElementById('popup')
        playerOptions.forEach(option => {
            option.style.display='none'
            finalresult.style.display='none'
        });
        popup.style.display='block'
        gameover.textContent='GAME OVER!'
        movesLeft.style.display='none'
        if(playerScores>computerScore){
            result.textContent='You Won!'
            result.style.color='green'
        }
        else if(playerScores<computerScore){
            result.textContent='You Lose!'
            result.style.color='red'
        }
        else{
            result.textContent='Tie Game'
        }
        reloadbtn.textContent='Restart'
        reloadbtn.style.display='block'
        reloadbtn.addEventListener('click',() => {
            window.location.reload()
        })
    }
    playGame()
}
game()
