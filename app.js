function game(r_choice_p){ // 
    
    let computer = ['rock', 'scissors','paper']
    let result = Math.floor(Math.random()*3);

    let player = ['rock', 'scissors','paper']

    if(result === player){
        Result_end = " .It's a draw";
    } else if (r_choice_p === 0 && result === 1){
        Result_end = " .You won";
    } else if (r_choice_p === 1 &&  result === 2){
        Result_end = " .You won "
    } else if (r_choice_p === 2 &&  result === 0){
        Result_end = " .You won "
    } else {
        Result_end = " You lost"
    }

    document.getElementById("result1").innerHTML = "You chose " + player[r_choice_p];
    document.getElementById("result2").innerHTML = "Computer chose " + computer[result] + Result_end;


}