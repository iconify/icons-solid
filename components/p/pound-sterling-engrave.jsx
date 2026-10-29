import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w5w-rzb-t.css';
import '../../css/i/imtqu_b5k.css';
import '../../css/e/el1kjl5wx.css';
import '../../css/g/gyml1pbky.css';
import '../../css/n/nrkw5gj_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w5w-rzb-t wm-k"/><path class="imtqu_b5k wm-a"/><path class="el1kjl5wx wm-shadow"/><path class="gyml1pbky wm-k"/><path class="nrkw5gj_w wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pound-sterling-engrave"} {...others} />);
}

export default Component;
