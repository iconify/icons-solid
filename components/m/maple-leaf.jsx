import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yovytxb4j.css';
import '../../css/h/hh5kqdbgi.css';
import '../../css/j/jinbyz2dn.css';
import '../../css/m/m3x3ojxtw.css';
import '../../css/j/jf_2d2xei.css';
import '../../css/r/rl4p35_0z.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGnc0Mxc4U" cx="73.1" cy="61.6" r="153.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="yovytxb4j"/><stop offset=".85" class="hh5kqdbgi"/><stop offset="1" class="hh5kqdbgi"/></radialGradient></defs><path class="jinbyz2dn"/><path fill="url(#SVGnc0Mxc4U)" transform="matrix(2.3 0 0 2.3 25.921 25.921)" class="m3x3ojxtw"/><path class="jf_2d2xei"/><path class="rl4p35_0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:maple-leaf"} {...others} />);
}

export default Component;
