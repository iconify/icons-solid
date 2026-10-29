import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jt065lb1t.css';
import '../../css/k/kz9qlpk6s.css';
import '../../css/q/qit5teboe.css';
import '../../css/s/sfp-qh-hh.css';
import '../../css/x/x74picb7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jt065lb1t wm-k"/><path class="kz9qlpk6s wm-s"/><path class="qit5teboe wm-shadow"/><path class="sfp-qh-hh wm-k"/><path class="wm-s x74picb7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:moon-star-engrave"} {...others} />);
}

export default Component;
