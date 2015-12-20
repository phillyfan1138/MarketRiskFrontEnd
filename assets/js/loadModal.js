//this class creates the modal and provides utility classes to change various aspects of the modal.
function loadModal(hndlBarsModal){
    this.self={};
    this.interior={};
    this.oldInterior={};
    this.footer={};
    this.oldFooter={};
    this.modal=hndlBarsModal;
    var slf=this;
    this.launch=function(title){
        var modal=slf.modal({title:title});
        self=$($(modal)[2]);
        self.modal('show');
        self.on('hidden.bs.modal', function(){ 
            self.remove(); 
        });
        slf.interior=self.find('.modal-body');
        slf.footer=self.find('.modal-footer');
    }
    this.replaceInterior=function(html){
        slf.oldInterior=slf.interior.html();
        slf.interior.html(html);//replaces what was inside    
    }
    this.replaceFooter=function(html){
        slf.oldFooter=slf.footer.html();
        slf.footer.html(html);//replaces what was inside    
    }
    this.undoFooter=function(html){ //undoes the previous action 
        var p=slf.footer.html();
        slf.footer.html(oldFooter);
        slf.oldFooter=p;
    }
    this.appendInterior=function(html){
        slf.oldInterior=slf.interior.html();
        slf.interior.html(slf.interior.html()+html);//appends to what was inside   
    }   
    this.prependInterior=function(html){
        slf.oldInterior=slf.interior.html();
        slf.interior.html(html+slf.interior.html());//appends to what was inside   
    }     
    this.undoInterior=function(){
        var p=slf.interior.html();
        slf.interior.html(slf.oldInterior);
        slf.oldInterior=p;
    }
}