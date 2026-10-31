import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/tqg3a81xw.css';
import '../../css/t/tgih9n21h.css';
import '../../css/h/h2pud3b_z.css';
import '../../css/x/xl-u6ubjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGbXmwS6bi" x1="9" x2="15" y1="1.8" y2="22.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGbXmwS6bi)" class="tqg3a81xw"/><path class="tgih9n21h wm-shine"/><path class="h2pud3b_z wm-shine"/><path class="wm-shine xl-u6ubjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:hexagon"} {...others} />);
}

export default Component;
