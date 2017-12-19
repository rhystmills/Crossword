// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Where two carpenters meet",
					answer: "joint",
					position: 1,
					orientation: "across",
					startx: 2,
					starty: 1
				},
			 	{
					clue: "Fabulous sounding lysosomal storage disorder",
					answer: "fabry",
					position: 5,
					orientation: "across",
					startx: 9,
					starty: 2
				},
				{
					clue: "That's a sore spot",
					answer: "ulcer",
					position: 8,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "Testosterone deficiency",
					answer: "hypogonadism",
					position: 9,
					orientation: "across",
					startx: 6,
					starty: 4
				},
				{
					clue: "The website for healthcare professionals",
					answer: "epgonline",
					position: 13,
					orientation: "across",
					startx: 1,
					starty: 7
				},
				{
					clue: "Laughter is cheap what?",
					answer: "medicine",
					position: 14,
					orientation: "across",
					startx: 11,
					starty: 7
				},
				{
					clue: "It'd be criminal not to test it",
					answer: "trial",
					position: 16,
					orientation: "across",
					startx: 7,
					starty: 9
				},
				{
					clue: "17",
					answer: "atrial line",
					position: 17,
					orientation: "across",
					startx: 11,
					starty: 10
				},
				{
					clue: "Unique Levis",
					answer: "genes",
					position: 19,
					orientation: "across",
					startx: 1,
					starty: 11
				},
				{
					clue: "Everyone has to wear it",
					answer: "skin",
					position: 21,
					orientation: "across",
					startx: 13,
					starty: 12
				},
				{
					clue: "This study makes me nervous",
					answer: "neurology",
					position: 22,
					orientation: "across",
					startx: 1,
					starty: 13
				},
				{
					clue: "Skin-, blood-, driving-",
					answer: "test",
					position: 6,
					orientation: "across",
					startx: 16,
					starty: 13
				},
				{
					clue: "Cover 2/3 of the planet",
					answer: "Saline",
					position: 24,
					orientation: "across",
					startx: 11,
					starty: 14
				},
				{
					clue: "Studying the Big C",
					answer: "oncology",
					position: 2,
					orientation: "down",
					startx: 3,
					starty: 1
				},
				{
					clue: "Shock of a lifetime (abbr.)",
					answer: "af",
					position: 3,
					orientation: "down",
					startx: 9,
					starty: 1
				},
				{
					clue: "Flesh and bones",
					answer: "muskuloskeletal",
					position: 4,
					orientation: "down",
					startx: 20,
					starty: 1
				},
				{
					clue: "Mind over matter",
					answer: "psychiatry",
					position: 5,
					orientation: "down",
					startx: 7,
					starty: 2
				},
				{
					clue: "Almost identicals",
					answer: "biosimilars",
					position: 7,
					orientation: "down",
					startx: 11,
					starty: 2
				}
				{
					clue: "Posh people are warm, at least?",
					answer: "common cold",
					position: 8,
					orientation: "down",
					startx: 17,
					starty: 2
				}
				{
					clue: "Sit still and pay attention!(abbr.)",
					answer: "biosimilars",
					position: 7,
					orientation: "down",
					startx: 11,
					starty: 2
				}
				{
					clue: "Early jab",
					answer: "inoculation",
					position: 12,
					orientation: "down",
					startx: 15,
					starty: 4
				}
				{
					clue: "Give away your kebab",
					answer: "doner",
					position:13,
					orientation: "down",
					startx: 5,
					starty: 5
				}
				{
					clue: "999",
					answer: "emergency",
					position: 14,
					orientation: "down",
					startx: 1,
					starty: 7
				}
				{
					clue: "Great outcome!",
					answer: "result",
					position: 18,
					orientation: "down",
					startx: 13,
					starty: 10
				}
				{
					clue: "Half-sister",
					answer: "Cyst",
					position: 20,
					orientation: "down",
					startx: 9,
					starty: 12
				}
			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
