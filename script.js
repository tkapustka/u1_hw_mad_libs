const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Undertone', 'Sparkflow'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Innovid'];

let random1 = Math.floor((Math.random() * startupX.length));
let random2 = Math.floor((Math.random() * startupY.length));


console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);


function createOutput() {
    document.getElementById("create");
    document.getElementById("xForY").innerHTML += ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
}

function clearContent(){
    document.getElementById('xForY').innerHTML = '';
}
