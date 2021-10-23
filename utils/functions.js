// Entrega uma lista de objetso com name e uma serie de links
function many_links_to_category(string_literal){
	string_literal1 = string_literal.replace('/\s/g','')
	string_literal1 = string_literal1.split('\n')
	string_return = []
	flag = false
	mark_string = '!!!'
	new_category = {}
	string_literal1.shift()
	string_literal1.pop()
	for (const i of string_literal1) {

		line = i.trim().replace('\t\t\t','')
		if(flag){
			// parar a contagem de uma categoria
			if(line.startsWith('!!!')){
				string_return.push(JSON.parse(JSON.stringify(new_category)))
			}	
		}
		if(line.startsWith('!!!')){
			new_category = {}
			new_category.name = line.slice(4)
			new_category.links = []
			flag = true
		} else {
			new_category.links.push(line)
		}
	}
	// tem que enviar o ultimo
	if(new_category.links.length != 0){
		string_return.push(JSON.parse(JSON.stringify(new_category)))
	}
	return string_return
}

function name_and_link_to_list_of_obj(string_literal){
	string_literal1 = string_literal.replace('/\s/g','')
	string_literal1 = string_literal1.split('\n')
	string_re = []
	for (const i of string_literal1) {
		string_re.push(i.trim().replace('\t\t\t',''))
	}
	string_re.shift()
	string_re.pop()
	if( string_re.length % 2 != 0 ){
		console.log("É impar, falta algo", string_re)
	}
	list_of_obj = []
	for (var i = 0; i < string_re.length; i = i + 2) {
	    list_of_obj.push({ name: string_re[i], link: string_re[i+1]})
	}
	return list_of_obj
}

function convert_in_list(astring){
	x = astring.split('\n')
	x.shift()
	x.pop()
	return x
}
