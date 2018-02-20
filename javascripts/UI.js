  var task, attr1, attr2, alpha=1, beta=1,gama=1;
  function dorpSelected(id){
      $(".dropbtn").html($(id).text() +'<span style="float:right"><i class="fa fa-caret-down"></i></span>');
      $(".dropdown-content").slideUp();
  }
  
  $(".dropbtn").click(function(){
     $(".dropdown-content").show();
  })

  $('#retrieve').click(function(){
      task = "Retrieve";
      dorpSelected('#retrieve');

  });
  $('#anomalies').click(function(){
      task = "Anomalies";
       dorpSelected('#anomalies');

  });
  $('#groups').click(function(){
      task = "Cluster";
       dorpSelected('#groups');
  });
  $('#correlation').click(function(){
      task = "Correlations";
      dorpSelected('#correlation');
  });
  $('#derived').click(function(){
      task = "Derived";
      dorpSelected('#derived');
  });
  $('#distribution').click(function(){
      task = "Distribution";
      dorpSelected('#distribution');
  });
  $('#extremum').click(function(){
      task = "Extremum";
      dorpSelected('#extremum');
  });
  $('#filtering').click(function(){
      task = "Filter";
      dorpSelected('#filtering');
  });
  $('#ordering').click(function(){
      task = "Order";
      dorpSelected('#ordering');
  });
  $('#range').click(function(){
      task = "Range";
      dorpSelected('#range');
  });


$('input[type=radio][name=optradio1]').change(function() {
    switch($(this).parent('label').text()) {
        case 'Numerical' :
            attr1 = 'Numerical';
            break;
        case 'Ordinal' :
            attr1 = 'Ordinal';
            break;
        case 'Nominal' :
            attr1 = 'Nominal';
            break;
    }            
})

$('input[type=radio][name=optradio2]').change(function() {
    switch($(this).parent('label').text()) {
        case 'Numerical' :
            attr2 = 'Numerical';
            break;
        case 'Ordinal' :
            attr2 = 'Ordinal';
            break;
        case 'Nominal' :
            attr2 = 'Nominal';
            break;
    }            
})


$(document).on('input', '#time', function() {
    alpha = $(this).val()/100;
});

$(document).on('input', '#accuracy', function() {
    beta = $(this).val()/100;
});

$(document).on('input', '#preference', function() {
    gama = $(this).val()/100;
});



$(".rankBtn").click(function(){
    $("#loader").show();
    var obj = [task,attr1,attr2, alpha, beta, gama];
    var k = getChartPeformance(obj, function(val){
       setTimeout(function(){ 
           $("#loader").hide()
           showRanking(val);
       }, 1000);

    });
  function showRanking(dataModel){
      $(".rankedVis").empty();
      if(dataModel.length>1)
       $(".rankedVis").append(" <p><strong> From Best to Worse! </strong></p>");
      for(i=0;i<dataModel.length;i++)
      {
          var el = $("<div />").css("display", "none").text(dataModel[i])
          $(".rankedVis").append(el);
          el.slideDown(600);
      }
  }
});