import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l082k8bwi.css';
import '../../css/w/w32wzzbhe.css';
import '../../css/h/htgya3b-j.css';
import '../../css/e/e9o1sebmx.css';
import '../../css/l/lyis6ubzx.css';
import '../../css/z/za5dx1t4s.css';
import '../../css/b/bmqf4y-5r.css';
import '../../css/s/stui2mbih.css';

const viewBox = {"width":456,"height":96};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGh9MNhd0j)" clip-rule="evenodd" class="l082k8bwi"/><path clip-rule="evenodd" class="w32wzzbhe"/><path fill="url(#SVGrhWjLdIF)" clip-rule="evenodd" class="htgya3b-j"/><path class="e9o1sebmx"/><defs><linearGradient id="SVGh9MNhd0j" x1="48" x2="117.5" y1="0" y2="69.5" gradientUnits="userSpaceOnUse"><stop class="lyis6ubzx"/><stop offset="1" class="za5dx1t4s"/></linearGradient><linearGradient id="SVGrhWjLdIF" x1="28" x2="28" y1="8" y2="48" gradientUnits="userSpaceOnUse"><stop class="bmqf4y-5r"/><stop offset="1" class="stui2mbih"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:overseerr"} {...others} />);
}

export default Component;
