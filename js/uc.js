/**
 * 
 */
		$(document).ready(function() {
			$("#detailOverview").click(function() {
				// Got button click
				console.log("Got button click");
				$("ol p").not(".loop").toggleClass("hideMe");
				var btnText = $("#detailOverview").text();
				console.log("button text :  " + btnText);
				if(btnText.indexOf("view") != -1) {	// btnText contains the string 'view'
					//$("#detailOverview").html('Show Overview');
					var overviewText = btnText.replace("view", "hide");
					overviewText = "<strong>" + overviewText + "</strong>";
					$("#detailOverview").html(overviewText);
					var overviewTitle = $("#ucTitle").text();
					console.log("UC Title :  " + detailOverview);
					//alert("");
					var detailTitle = overviewTitle.replace("Overview", "Detail");
					$("#ucTitle").text(detailTitle);
				} else {
					console.log("Button clicked");
					//$("#detailOverview").html('Show Detail');
					var detailText = btnText.replace("hide", "view");
					detailText = "<strong>" + detailText + "</strong>";
					$("#detailOverview").html(detailText);

					var detailTitle = $("#ucTitle").text();
					//console.log("UC Title :  " + detailOverview);
					//alert("");
					var overViewTitle = detailTitle.replace("Detail", "Overview");
					$("#ucTitle").text(overViewTitle);
				}
			});
		});
