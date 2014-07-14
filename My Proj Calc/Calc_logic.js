var ef;
var bool=0;
var b;
var cd;
var ab;
var begin =1;
var a=0;
var initial;
var cnt=0;
var oflg=0;
var pflg =0;
var o;
var ff=0;
var eflag;


function show(val)
{
	
	a=1;
	ab= calc.result.value;				
	cd = (ab.length)+1;
	ef = calc.result.value.charAt(cd);
	/*alert("this is" + cd);*/
	if(val == '.' && bool == 0)
	{	
		alert("Only one decimal allowed in this operation !");  
		
				if(calc.result.value.length == 12)
				{
					alert("Maximum Length");
				}
				else{
						calc.result.value += val;
						
						calc.memory.value += val;
						
						
						bool=1;
					}
			
	}
	
	else{
	
		if(val=='.' && bool == 1)
		{
			alert("Decimal Restriction");
		}
		
		else
		{
			if(calc.result.value.length == 12)
			{
				alert("Maximum length !");
			}

					else
					{
							 if(calc.result.value.length ==25 && oflg ==1)
					 {
						 alert("Maximum Length !");
						 
					 }
					 else
					 	{
						calc.result.value += val;							
						calc.memory.value = val;
						}
					}
				
		
		
	cnt= cnt+1;
	
	}
	}
	
}

function operation(opratr)

{

	if(begin ==1 && opratr =="-")
	{
			calc.result.value += opratr;
	}
	
	else
	{
		begin =0;
	if(cnt == 0 && opratr != '-')
	{
		alert("Enter Numerical Value");
			
	}
	else
	{
		
		if(oflg  == 0)
		{
		/*alert("first_var");*/
		
				
				
					initial=calc.result.value;							
					o=opratr;
					calc.memory.value = calc.result.value;
					
					calc.result.value += opratr;
					oflg = 1;
					cnt = cnt +1;
					bool =0;
					
					calc.memory.value = opratr;		
					
					
		}
		else
		{
			
			/*alert("Attempt 1");*/
			
					if(calc.memory.value == '0' && o =='/')
						{
						alert("Invalid Division");
						calc.result.value='';
						oflg = 0;
						calc.memory.value ='';
						}
				
				
					 else{
						 	
							
							
							
							calc.result.value = eval(calc.result.value);
							calc.memory.value=calc.result.value;
							
							o=opratr;									
							oflg = 0;
							
											 
				 }
				 
			
		 }
	}
	pflg =1;
	}
}



function cal()
{
			if(a == 0)
				{
					alert("Enter Numerical Value!");
					calc.result.value='';
				}
				
			else
			{
				
				if(calc.memory.value== '0' && o =='/')
					{
						alert("Invalid Division");
						calc.result.value='';
						oflg = 0;
						calc.memory.value='';
						cnt =0;
					}
				
				else
				 	{
						/*alert('here op flag value is  ' );*/
						var b=0;
			
							if(pflg == 1)
							{
								o =0;
								calc.result.value = eval(calc.result.value);
								oflg = 0;
							}
	
	
							if(oflg == 0)
							{
										
								o=0;	
							}
			
							else 
							{
				
				
					
					
					
							
								/*alert("There is some thing in the op ");*/
								calc.result.value = eval(initial+o+calc.result.value);
								
								ff=1;
					
				
							o=0;
				
					
							}

	
		pflg=0;
		eflag = 1;
		oflg=0;
			}
}
}


function deln()
{

	calc.result.value = calc.result.value.substring(0,(cnt-1));
	cnt = cnt -1;
	
}




