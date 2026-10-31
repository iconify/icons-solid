import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/b/bu7o03h0u.css';
import '../../css/w/wr5jrt75z.css';
import '../../css/p/p-u4g_fhe.css';
import '../../css/h/h2ahmkxqj.css';
import '../../css/v/v0tmv0b8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwEU9bdmi" x1="9" x2="15" y1="3.52" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGwEU9bdmi)" class="bu7o03h0u"/><path class="wm-a wr5jrt75z"/><path class="p-u4g_fhe wm-shine"/><path class="h2ahmkxqj wm-shine"/><path class="v0tmv0b8w wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:graduation-cap"} {...others} />);
}

export default Component;
