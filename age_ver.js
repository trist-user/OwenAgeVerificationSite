
const userInput = document.getElementById("userin");
const submitButton = document.getElementById("send");
const myOutput = document.getElementById("result");

let age;

submitButton.onclick = function(){
    age = Number(userInput.value);
    if (age === 67){
        myOutput.innerHTML = "get out, nobody wants you here. minus ten points to the national average IQ score";
    }else if(age >= 16 && age <= 99){
        myOutput.innerHTML = "congrats you are old enough to use youtube in australia"
    }else if(age <21){
        myOutput.innerHTML = "gng why u aqui? go learn so you can fail at getting a job so that you can not have money and then become a raging alcoholic once you're finally 21";
    }else if (age > 99){
        myOutput.innerHTML = "Wasn't expecting to find you here, good job on still being alive";
    }else{
        myOutput.innerHTML = "you rat, you either found a number I didn't include, or you goofed my code";
    }
}