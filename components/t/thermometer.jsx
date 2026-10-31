import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/pc5964fzn.css';
import '../../css/y/yt8cyf4wk.css';
import '../../css/g/gunnoefzq.css';
import '../../css/f/ffb202wpi.css';
import '../../css/u/ub14uvb2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG2rCXEd8X" x1="9.25" x2="15.25" y1="2" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG2rCXEd8X)" class="pc5964fzn"/><path class="wm-a yt8cyf4wk"/><path class="gunnoefzq wm-shine"/><path class="ffb202wpi wm-shine"/><path class="ub14uvb2p wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:thermometer"} {...others} />);
}

export default Component;
