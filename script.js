var secret = (Math.random() * 100).toFixed(0);

function dosomething() {
    
    var myInput = document.getElementById("input").value;
    
    var guess = parseInt(myInput);

    if (secret - guess > 30){
        document.getElementById("output").innerText = "You are way too high!";
    }
    if (secret - guess > 20) AND (secret - guess <= 30){
        document.getElementById("output").innerText = "You are mildy high!";
    }
    if (secret - guess > 10 AND (secret - guess <= 20){
        document.getElementById("output").innerText = "You are a bit too high!";
    }
    if (secret - guess > 0 AND (secret - guess <= 10){
         document.getElementById("output").innerText = "You are so near...";
    }
    if (secret - guess < 0 AND (secret - guess >= -10){
        document.getElementById("output").innerText = "You are so near...";
    }
    if (secret - guess < -10 AND (secret - guess >= -20){
        document.getElementById("output").innerText = "You are a bit too low!";
    }
    if (secret - guess < -20 AND (secret - guess >= -30){
        document.getElementById("output").innerText = "You are mildy low!";
    }
    if (secret - guess < -30){
        document.getElementById("output").innerText = "You are way too low!";
    }
}