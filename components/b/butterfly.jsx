import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/fwmoncc7r.css';
import '../../css/l/lqtkn-bgh.css';
import '../../css/y/y293ov7gc.css';
import '../../css/u/u79vwu6yj.css';
import '../../css/b/bqns9_f5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGCWvVPcdU" x1="9" x2="15" y1="2.5" y2="21.13" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGCWvVPcdU)" class="fwmoncc7r"/><path class="lqtkn-bgh wm-a"/><path class="wm-shine y293ov7gc"/><path class="u79vwu6yj wm-shine"/><path class="bqns9_f5d wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:butterfly"} {...others} />);
}

export default Component;
