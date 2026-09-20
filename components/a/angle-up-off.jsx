import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h6g2bb68s.css';
import '../../css/d/ds5qc2bnf.css';
import '../../css/w/w-xkhkb-i.css';
import '../../css/f/fpwcizi8z.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="h6g2bb68s"/><path class="ds5qc2bnf"/><path class="w-xkhkb-i"/><path class="fpwcizi8z"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:angle-up-off"} {...others} />);
}

export default Component;
