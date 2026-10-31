import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/t0cnmjbdo.css';
import '../../css/m/mu-nj2iui.css';
import '../../css/l/lzcjwrbza.css';
import '../../css/n/nck3wy89e.css';
import '../../css/i/ik9mygb2g.css';
import '../../css/b/b1icwwbmz.css';
import '../../css/u/ubbkvy0rc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJVk3Ybng" x1="9" x2="15" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="t0cnmjbdo wm-s"/><path fill="url(#SVGJVk3Ybng)" class="mu-nj2iui"/><path class="lzcjwrbza wm-a"/><path class="nck3wy89e wm-s"/><path class="ik9mygb2g wm-shine"/><path class="b1icwwbmz wm-shine"/><path class="ubbkvy0rc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:copy-check"} {...others} />);
}

export default Component;
