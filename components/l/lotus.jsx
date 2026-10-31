import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/l/lnmuy2b5u.css';
import '../../css/u/u5cr6pfvi.css';
import '../../css/f/fwmcjjmys.css';
import '../../css/p/p03v32qrm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGoxCuqQJx" x1="8.99" x2="14.99" y1="2.52" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGoxCuqQJx)" class="lnmuy2b5u"/><path class="u5cr6pfvi wm-a"/><path class="fwmcjjmys wm-s"/><path class="p03v32qrm wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:lotus"} {...others} />);
}

export default Component;
