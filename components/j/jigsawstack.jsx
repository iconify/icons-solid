import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_bv5_7vk.css';
import '../../css/l/lakz72kok.css';
import '../../css/a/asl6h2bqi.css';

const viewBox = {"width":278,"height":278};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGr3iNbeAK)" class="d_bv5_7vk"/><defs><linearGradient id="SVGr3iNbeAK" x1="-2.153" x2="368.564" y1="42.449" y2="304.786" gradientUnits="userSpaceOnUse"><stop offset=".184" class="lakz72kok"/><stop offset=".958" class="asl6h2bqi"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:jigsawstack"} {...others} />);
}

export default Component;
