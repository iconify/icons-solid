import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/x/xf96yubce.css';
import '../../css/j/jaemq5bdy.css';
import '../../css/a/azqvr84oo.css';
import '../../css/r/r_hj8m7-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGMaeUQXFX" x1="9.01" x2="15.01" y1="4" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGMaeUQXFX)" class="xf96yubce"/><path class="jaemq5bdy wm-shine"/><path class="azqvr84oo wm-shine"/><path class="r_hj8m7-d wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:folder-x"} {...others} />);
}

export default Component;
