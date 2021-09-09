var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,game
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  
}

function draw() {
  background(backgroundImage);
}

