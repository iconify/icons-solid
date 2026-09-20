import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ubgg72beu.css';
import '../../css/h/h6g2bb68s.css';
import '../../css/d/ds5qc2bnf.css';
import '../../css/w/w-xkhkb-i.css';
import '../../css/f/fpwcizi8z.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ubgg72beu"/><path class="h6g2bb68s"/><path class="ds5qc2bnf"/><path class="w-xkhkb-i"/><path class="fpwcizi8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:angle-up"} {...others} />);
}

export default Component;
