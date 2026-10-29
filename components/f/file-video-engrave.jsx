import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j6n-d7z2s.css';
import '../../css/o/olh21jifq.css';
import '../../css/v/vp3_m3b5w.css';
import '../../css/z/z4bbp2bhq.css';
import '../../css/v/v4khyuswn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j6n-d7z2s wm-k"/><path class="olh21jifq wm-shadow"/><path class="vp3_m3b5w wm-k"/><path class="wm-a z4bbp2bhq"/><path class="v4khyuswn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-video-engrave"} {...others} />);
}

export default Component;
