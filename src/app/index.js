var _ = require('lodash');
var PIXI = require('pixi');


console.log('hello world')


var renderer = new PIXI.WebGLRenderer(800, 600);
document.body.appendChild(renderer.view);


var stage = new PIXI.Container();
var bunny;
var bunny = null;


PIXI.loader.add('bunny', 'images/phaser-dude.png').load(function (loader, resources) {
	// This creates a texture from a 'bunny.png' image.
	bunny = new PIXI.Sprite(resources.bunny.texture);
	var blurFilter = new PIXI.filters.BlurFilter();
	var colorMatrix = new PIXI.filters.ColorMatrixFilter();
	blurFilter.blur = 10;



	// Setup the position and scale of the bunny
	bunny.position.x = 400;
	bunny.position.y = 300;

	bunny.scale.x = 2;
	bunny.scale.y = 2;

	bunny.filters = [colorMatrix];

	colorMatrix.contrast(20);

	// Add the bunny to the scene we are building.
	stage.addChild(bunny);

	console.log(bunny)

	animate();
});


function animate() {
	bunny.rotation -= 0.01;

	renderer.render(stage);
	requestAnimationFrame(animate);
}
