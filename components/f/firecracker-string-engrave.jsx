import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wcvxvkbpw.css';
import '../../css/t/th88qtb3j.css';
import '../../css/w/w_crj8zkq.css';
import '../../css/f/ftcwajbky.css';
import '../../css/z/zy9xw0nee.css';
import '../../css/g/g2ivodb2f.css';
import '../../css/v/vt-2nu9uw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wcvxvkbpw wm-k"/><path class="th88qtb3j wm-a"/><path class="w_crj8zkq wm-s"/><path class="ftcwajbky wm-shadow"/><path class="wm-a zy9xw0nee"/><path class="g2ivodb2f wm-k"/><path class="vt-2nu9uw wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:firecracker-string-engrave"} {...others} />);
}

export default Component;
