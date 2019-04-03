var mongoose  =  require( 'mongoose' );
var Schema    =  mongoose.Schema;

var reviewerSchema  =  new Schema({
		reviewerName       :	{ 
							type     : String, 
							required : true 
						},
		movieTitle   :	{
							type     : String,
							required : true
						},
		rating   :	{
							type     : String,
							required : true
						},
		reviewString   :	{
							type     : String,
							required : true
						}
	});
	
var Reviewer  =  mongoose.model( 'Reviewer' , reviewerSchema );

module.exports  =  Reviewer;