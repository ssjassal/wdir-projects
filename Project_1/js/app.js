console.log('Simon has been initialized');

$(function(){
	console.log('In the jquery');
	createBoard();

//====================================================
//Grab Elements
//====================================================
	
	$levelButton = $('#levelChoice');
	$longestButton = $('#longestSeq');
	$startGame = $('#startGame');
	$lastButton = $('#lastSeq');
	$muteButton = $('#muteSounds');
//====================================================
//Data & App Logic
//====================================================
	$levelSequence = [];
	$round = 0;
	$playerScore = 0;
	$simonScore = 0;

	var easyLevelObject = function(){

		for (var i = 1; i < 6; i++) 
		{
			$levelArray = [];
			console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				console.log('round 1');
				for (var j = 0; j < 4; j++) 
				{
					//console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
				//console.log($levelSequence);
			}else if(i == 2)
			{
				console.log('round 2');
				for (var j = 0; j < 5; j++) 
				{
					// $levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 3)
			{
				console.log('round 3');
				for (var j = 0; j < 6; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 4)
			{
				console.log('round 4');
				for (var j = 0; j < 7; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				console.log('round 5');
				for (var j = 0; j < 8; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
		}
		// console.log($levelSequence);
	}

	var mediumLevelObject = function(){

		for (var i = 1; i < 7; i++) 
		{
			$levelArray = [];
			console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				console.log('round 1');
				for (var j = 0; j < 4; j++) 
				{
					//console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
				//console.log($levelSequence);
			}else if(i == 2)
			{
				console.log('round 2');
				for (var j = 0; j < 6; j++) 
				{
					// $levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 3)
			{
				console.log('round 3');
				for (var j = 0; j < 8; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 4)
			{
				console.log('round 4');
				for (var j = 0; j < 10; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				console.log('round 5');
				for (var j = 0; j < 12; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
			else if(i == 6)
			{
				console.log('round 6');
				for (var j = 0; j < 14; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
		}
		console.log($levelSequence);
	}

	var hardLevelObject = function(){

		for (var i = 1; i < 6; i++) 
		{
			$levelArray = [];
			console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				//console.log('round 1');
				for (var j = 0; j < 4; j++) 
				{
					console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
				//console.log($levelSequence);
			}else if(i == 2)
			{
				console.log('round 2');
				for (var j = 0; j < 8; j++) 
				{
					// $levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 3)
			{
				console.log('round 3');
				for (var j = 0; j < 12; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 4)
			{
				console.log('round 4');
				for (var j = 0; j < 16; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				console.log('round 5');
				for (var j = 0; j < 20; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
		}
		console.log($levelSequence);
	}

	var extremeLevelObject = function(){

		for (var i = 1; i < 8; i++) 
		{
			$levelArray = [];
			console.log('In the makeLevel FOR loop: ' + i);
			if(i == 1)
			{
				console.log('round 1');
				for (var j = 0; j < 4; j++) 
				{
					//console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					//console.log($levelArray);
				}
				$levelSequence.push($levelArray);
				//console.log($levelSequence);
			}else if(i == 2)
			{
				console.log('round 2');
				for (var j = 0; j < 9; j++) 
				{
					// $levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log(j);
					$levelArray.push(Math.floor(Math.random()*4));
					
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 3)
			{
				console.log('round 3');
				for (var j = 0; j < 14; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
					//console.log($levelArray);
					// console.log($levelSequence);
				}
				$levelSequence.push($levelArray);
			}else if(i == 4)
			{
				console.log('round 4');
				for (var j = 0; j < 19; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}else if(i == 5)
			{
				console.log('round 5');
				for (var j = 0; j < 24; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
			else if(i == 6)
			{
				console.log('round 6');
				for (var j = 0; j < 29; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
			else if(i == 7)
			{
				console.log('round 7');
				for (var j = 0; j < 34; j++) 
				{
					$levelArray.push(Math.floor(Math.random()*4));
					// $levelSequence['round'+ i] = $levelArray;
				}
				$levelSequence.push($levelArray);
			}
		}
		console.log($levelSequence);
	}
//====================================================
//Event Handlers
//====================================================
	var determineLevel = function(){
		
		console.log('In the determineLevel function');
		//console.log($(this).attr('class'));

		if($(this).attr('class') == 'button')
		{
			$('#content p').text('Easy');
			$(this).addClass('clicked1');
		}
		else if($(this).attr('class') == 'button clicked1')
		{
			$('#content p').text('Medium');
			$(this).removeClass('clicked1');
			$(this).addClass('clicked2');
			// $levelButton.on('click', determineLevel);

		}else if($(this).attr('class') == 'button clicked2')
		{
			$('#content p').text('Hard');
			$(this).removeClass('clicked2');
			$(this).addClass('clicked3');
			// $levelButton.on('click', determineLevel);

		}else if($(this).attr('class') == 'button clicked3')
		{
			$('#content p').text('Extreme');
			$(this).removeClass('clicked3');
			$(this).addClass('clicked4');
			// $levelButton.on('click', determineLevel);
		}else if($(this).attr('class') == "button clicked4")
		{
			$(this).removeClass('clicked4');
		}		
	}

	var makeLevel	= function()
	{

		console.log('In the makeLevel function');
		$level = $('#content p').text();

		console.log($level);

		if($level == 'Easy')
		{	
			console.log('easy peazy');
			easyLevelObject();
			lightUpBoard();
			//console.log($levelSequence);
		}
		else if($level == 'Medium')
		{
			console.log('not so bad');
			mediumLevelObject();
			lightUpBoard();

		}
		else if($level == 'Hard')
		{
			console.log('oh em gee');
			hardLevelObject();
			lightUpBoard();

		}else
		{
			console.log('uh-oh');
			extremeLevelObject();
			lightUpBoard();

		}

	}
//====================================================
//Event Listeners
//====================================================	

	$levelButton.on('click', determineLevel);
	$startGame.on('click', instantiateGame)

});

//====================================================
//DOM Manipulation Functions
//====================================================

var createBoard = function(){
	for (var i = 0; i < 4; i++) {
		// console.log('in FOR Loop: ' + i);
		$content = $('#content');
		var $square = $('<div>').attr('class',i).attr('id','square' + i);
		$square.addClass('square');
		$square.css('opacity','.5');
		//console.log($square);
		$content.append($square);
	}
}

var instantiateGame = function(){

	$litSquare = $('#square0');
	$litSquare.fadeIn('slow');
	// $litSquare.css({'animation':'blinker 6s linear 1'});
	// $litSquare = $('#square1');
	// $litSquare.css({'animation':'blinker 6s linear 1'});
	// $litSquare = $('#square2');
	// $litSquare.css({'animation':'blinker 6s linear 1'});
	// $litSquare = $('#square3');
	// $litSquare.css({'animation':'blinker 6s linear 1'});
}

var lightUpBoard = function (){

	console.log('In the lightUpBoard function');
	console.log($levelSequence);

	for (var i = 0; i < $levelSequence.length; i++) {
		for (var j = 0; j < $levelSequence[i].length; j++) {
			$light = $levelSequence[i][j];

			if($light == 0)
			{
				console.log('Lighting up first square');
				// $litSquare = $('#square0');
				// $litSquare.css({'animation':'blinker 6s linear 1'});

			}else if($light == 1)
			{
				console.log('Lighting up first square');
				// $litSquare = $('#square1');
				// $litSquare.css({'animation':'blinker 6s linear 1'});

			}else if($light == 2)
			{
				console.log('Lighting up first square');
				// $litSquare = $('#square2');
				// $litSquare.css({'animation':'blinker 6s linear 1'});

			}else if($light == 3)
			{
				console.log('Lighting up first square');
				// $litSquare = $('#square3');
				// $litSquare.css({'animation':'blinker 6s linear 1'});

			}
		}
	}
	
}

var lightUp = function(litSquare) {

	$litSquare = $(litSquare);
	window.setTimeout(function() {
	$litSquare = $('#square0');
	$litSquare.css({'animation':'blinker 6s linear 1'});
	}, 300);

}


