// Code Practice: Making a Scene
// Name: Peter Dobbins
// Date: 13/1/25

"use strict";

let config = {
	type: Phaser.AUTO,
	scene: [MainMenu, Play],
};

let game = new Phaser.Game(config);
