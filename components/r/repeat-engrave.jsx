import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d-qkojgwa.css';
import '../../css/h/hn4dgnbwy.css';
import '../../css/z/zfr1z0bae.css';
import '../../css/q/q1pio2buw.css';
import '../../css/g/gdtfzh2qz.css';
import '../../css/v/vvbqvot1n.css';
import '../../css/g/gp29cxbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="d-qkojgwa wm-k"/><path class="hn4dgnbwy wm-a"/><path class="wm-shadow zfr1z0bae"/><path class="q1pio2buw wm-k"/><path class="gdtfzh2qz wm-a"/><path class="vvbqvot1n wm-k"/><path class="gp29cxbhj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:repeat-engrave"} {...others} />);
}

export default Component;
