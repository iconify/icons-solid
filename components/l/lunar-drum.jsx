import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/c/chfzn2bbm.css';
import '../../css/p/phssi4hxb.css';
import '../../css/e/eb04frbpd.css';
import '../../css/v/viuz1g3cd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGVWh2rdOR" x1="9" x2="15" y1=".51" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGVWh2rdOR)" class="chfzn2bbm"/><path class="phssi4hxb wm-a"/><path class="eb04frbpd wm-s"/><path class="viuz1g3cd wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:lunar-drum"} {...others} />);
}

export default Component;
