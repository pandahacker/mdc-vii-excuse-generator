import $ from "jquery";
import 'bootstrap'; //breathecode dom for more explicit errors
//import 'breathecode-dom'; //DOM override to make JS easier to use
import '../style/index.scss';

let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function generateExcuse(){
    console.log('Hello Rigo from the console!');

    var excuse = who[Math.floor(Math.random() * (who.length - 1))] + ' ' + what[Math.floor(Math.random() * (what.length - 1))] + ' ' + when[Math.floor(Math.random() * (when.length - 1))];

    console.log(excuse);

    document.getElementById('excuse').innerHTML = excuse;
}

window.onload = function() {
    generateExcuse();
    document.getElementById('myButton').addEventListener('click', generateExcuse);
};  

