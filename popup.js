jQuery( document ).ready(function($){
      
    /*Popup*/

    var popup = $( '.popup' );

    $( '.popup-overlay, .popup-close' ).click(function() {
      $( popup ).removeClass( 'active' );
        $( document.body ).removeClass( 'popup-opened' );
    });

    function openPopup(selector) {
        console.log('selector: ', $( selector ), 'selector length: ', $( selector ).length);
        if ( $( selector ).length ) {
          $( selector ).addClass( 'active' );
          $( document.body ).addClass( 'popup-opened' );
        }
    }

    /*Popup triggers*/

    $( '.popup-ask' ).click(function(){
      openPopup('#ask');
    });
});
