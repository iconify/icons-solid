import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5_fqnb0s.css';
import '../../css/s/stui2mbih.css';
import '../../css/z/z4y60jbap.css';
import '../../css/k/k4z5qfbck.css';
import '../../css/q/qo9fzgtoq.css';
import '../../css/r/r4zjt4buq.css';
import '../../css/z/z9n0qkqdz.css';
import '../../css/a/akqpowb7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGICqGqnjj" x1="1.5" x2="13.05" y1="4.22" y2="20.22" gradientUnits="userSpaceOnUse"><stop offset="0" class="p5_fqnb0s"/><stop offset=".42" class="stui2mbih"/><stop offset=".58" class="z4y60jbap"/><stop offset="1" class="k4z5qfbck"/></linearGradient></defs><path class="qo9fzgtoq"/><path class="r4zjt4buq wm-a"/><path class="wm-s z9n0qkqdz"/><path fill="url(#SVGICqGqnjj)" class="akqpowb7e wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-christmas:jingle-bells"} {...others} />);
}

export default Component;
