import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wb576gbsi.css';
import '../../css/s/s-ggr3bpl.css';
import '../../css/n/nh49v4u0b.css';
import '../../css/b/b3p9v5jmd.css';
import '../../css/m/mpm4kzbmz.css';

const viewBox = {"width":680,"height":684};
const content = `<g class="ft5dv1b6b"><rect fill="url(#SVGH15iiddw)" class="wb576gbsi"/><path class="s-ggr3bpl"/><defs><linearGradient id="SVGH15iiddw" x1="-50.5" x2="680" y1="0" y2="702.5" gradientUnits="userSpaceOnUse"><stop class="nh49v4u0b"/><stop offset=".5" class="b3p9v5jmd"/><stop offset="1" class="mpm4kzbmz"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:screpy"} {...others} />);
}

export default Component;
