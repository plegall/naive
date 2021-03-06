// use this in case of conflicts with other js frameworks
// jQuery.noConflict();

jQuery(document).ready(function($){

  /* Menubar
     -------
     piwigo's menubar is collapsible with a click on a 
     #menuswitcher button. Its visibility state is preserve during 
     the navigation with a cookie (borrowed to simple theme)
  */
  function show_side_menu(){
    $("#menuswitcher").html("&laquo;");
    $("#content").removeClass("one_col").addClass("two_col");
    $("#menubar").show();
  }
  function hide_side_menu(){
    $("#menubar").hide();
    $("#menuswitcher").html("&raquo;");
    $("#content").removeClass("two_col").addClass("one_col");
  }

  //Toggle menubar visibility
  $("#menuswitcher").removeClass("hidden").show();
  $("#menuswitcher").click(function(){
    if ( $("#menubar").is(":hidden") ) {
      show_side_menu();
      $.cookie('side-menu', 'showing', {path: "/"});
      return false;
    } else {
      hide_side_menu();
      $.cookie('side-menu', 'hiding', {path: "/"});
      return false;
    }
  });

  // creates a variable with the contents of the cookie side-menu
  var sidemenu = $.cookie('side-menu');
  // if cookie says the menu is hiding, keep it hidden!
  if ( sidemenu === 'hiding' ) {
    hide_side_menu();
  }
  if ( sidemenu === 'showing' ) {
    show_side_menu();
  }

  /* Image Infobar
     -------------
     piwigo's menubar is collapsible with a click on a
     #toggle_info_bar button. Its visibility state is preserve during
     the navigation with a cookie (borrowed to simple theme)
  */
  function show_image_info(){
    $("#toggle_info_bar").html("&raquo;");
    $("#image_panel").removeClass("one_col").addClass("two_col");
    $("#imageInfoBar").show();
  }
  function hide_image_info(){
    $("#imageInfoBar").hide();
    $("#image_panel").removeClass("two_col").addClass("one_col");
    $("#toggle_info_bar").html("&laquo;");
  }
 
  //Toggle Image's info bar visibility
  $("#toggle_info_bar").removeClass("hidden").show();
  $("#toggle_info_bar").click(function (){
    if ( $("#imageInfoBar").is(":hidden") ) {
      show_image_info();
      $.cookie('image-info', 'showing', {path: "/"});
    }
    else {
      hide_image_info();
      $.cookie('image-info', 'hiding', {path: "/"});
    }
  });

  // creates a variable with the contents of the cookie side-menu
  var image_info = $.cookie('image-info');
  // if cookie says the menu is hiding, keep it hidden!
  if ( image_info === 'hiding' ) {
    hide_image_info();    
  }
  if ( image_info === 'showing' ) {
    show_image_info();
  }

  /* Comments
     -------------
     Comments are collapsible with a click on a
     #toggle_comments button. Its visibility state is preserve during
     the navigation with a cookie (borrowed to simple theme)
  */
  function show_comments(){
    $("#toggle_comments .toggle_button").html("&raquo;");
    $("#comments").show();
  }
  function hide_comments(){
    $("#comments").hide();
    $("#toggle_comments .toggle_button").html("&laquo;");
  } 
      
  //Toggle comments visibility
  $("#toggle_comments .toggle_button").removeClass("hidden").show();
  $("#toggle_comments .toggle_button").click(function (){
    if ( $("#comments").is(":hidden") ) {
      show_comments();
      $.cookie('comments', 'showing', {path: "/"});
    }
    else {
      hide_comments();
      $.cookie('comments', 'hiding', {path: "/"});
    }
  });
    
  // creates a variable with the contents of the cookie comments
  var comments = $.cookie('comments');
  // if cookie says the comments are hiding, keep them hidden! unless you're 
  // trying to display the comments page ...
  if ( comments === 'hiding' && 
       ! (/comments.php/.test( $(location).attr('href') ) ) 
     ) {
    hide_comments();
  }
  if ( comments === 'showing' ) {
    show_comments();
  }
});
