import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4g4_1bnm.css';
import '../../css/h/h2ow64ijd.css';
import '../../css/b/bkrqtlb3c.css';
import '../../css/u/uf6-fs5hu.css';
import '../../css/f/f_w75xntu.css';

const viewBox = {"width":380,"height":390};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGmOno7bjC)" class="k4g4_1bnm"/><path fill="url(#SVGmOno7bjC)" class="h2ow64ijd"/><path fill="url(#SVGmOno7bjC)" class="bkrqtlb3c"/><defs><linearGradient id="SVGmOno7bjC" x1="190" x2="190" y1="104" y2="432" gradientUnits="userSpaceOnUse"><stop class="uf6-fs5hu"/><stop offset="1" class="f_w75xntu"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lowcoder"} {...others} />);
}

export default Component;
