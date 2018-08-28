alert("Connected");
var i = 0; var x; var c = 0; var p; var n1; var n2;
var a1;
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;
n1 = $("#player_one").val();
n2 = $("#player_two").val();

$("td").click("keypress",function(){

	x=($(this).text());
	if((x === "") && (c < 1)){
	if(i % 2 === 0)
	{
		$(this).text("X");
		i = i + 1;
	}
	else
	{
		$(this).text("O");
		i = i + 1;
	}

		a1 = $("#one_one").text();
		a2 = $("#one_two").text();
		a3 = $("#one_three").text();
		b1 = $("#two_one").text();
		b2 = $("#two_two").text();
		b3 = $("#two_three").text();
		c1 = $("#three_one").text();
		c2 = $("#three_two").text();
		c3 = $("#three_three").text();
		if((a1 === a2) &&(a2 === a3) && (a1 !== ""))
		{
			$("#one_one").css("color","yellow");
			$("#one_three").css("color","yellow");
			$("#one_two").css("color","yellow");
			p = a1;
			c = c + 1;
		}
		if((b1 === b2) && (b2 === b3) && (b1 !== ""))
		{
			$("#two_one").css("color","yellow");
			$("#two_three").css("color","yellow");
			$("#two_two").css("color","yellow");
			p = b1;
			c = c + 1;
		}
		if((c1 === c2) &&(c2 === c3) && (c1 !== ""))
		{
			$("#three_one").css("color","yellow");
			$("#three_three").css("color","yellow");
			$("#three_two").css("color","yellow");
			p = c1;
			c = c + 1;
		}
		if((a1 === b1) && (b1 === c1) && (a1 !== ""))
		{
			$("#one_one").css("color","yellow");
			$("#two_one").css("color","yellow");
			$("#three_one").css("color","yellow");
			p = a1;
			c = c + 1;
		}
		if((a2 === b2) && (b2 === c2) && (a2 !== ""))
		{
			$("#one_two").css("color","yellow");
			$("#two_two").css("color","yellow");
			$("#three_two").css("color","yellow");
			 p = a2;
			c = c + 1;
		}
		if((a3 === b3) && (b3 === c3) && (a3 !== ""))
		{
			$("#one_three").css("color","yellow");
			$("#two_three").css("color","yellow");
			$("#three_three").css("color","yellow");
			p = a3;
			c = c + 1;
		}
		if((a3 === b2) && (b2 === c1) && (a3 !== ""))
		{
			$("#one_three").css("color","yellow");
			$("#two_two").css("color","yellow");
			$("#three_one").css("color","yellow");
			p = a3;
			c = c + 1;
		}
		if((a1 === b2) && (b2 === c3) && (a1 !== ""))
		{
			$("#one_one").css("color","yellow");
			$("#two_two").css("color","yellow");
			$("#three_three").css("color","yellow");
			p = a1;
			c = c + 1;
		}
		if(p === "X")
		{
			n1 = $("#player_one").val();
			$(".winner").html(n1 + "IS WINNER");
			$(".winner").css("display","normal");
		}
	
	}
});
$("#restart").click(function(){
	i = 0;
	c = 0;
	$("td").text("");
})


