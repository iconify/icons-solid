import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d352xukaj.css';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kkvupxbje.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/f/fjry381fa.css';

const viewBox = {"width":126,"height":48};
const content = `<defs><path id="SVGvabBJgMB" class="d352xukaj"/></defs><g class="bi12bsetm"><path class="kkvupxbje"/><mask id="SVGFaSCLdiE" class="n1mjunbsu"><use href="#SVGvabBJgMB"/></mask><path mask="url(#SVGFaSCLdiE)" class="fjry381fa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:plaid-dark"} {...others} />);
}

export default Component;
