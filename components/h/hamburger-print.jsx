import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fg-4bjb3w.css';
import '../../css/b/blnixl87k.css';
import '../../css/w/wx8fs402j.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="fg-4bjb3w"/><path clip-rule="evenodd" class="blnixl87k"/><path class="wx8fs402j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:hamburger-print"} {...others} />);
}

export default Component;
