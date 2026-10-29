import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/ls-sv35we.css';
import '../../css/a/a7hn6vy_f.css';
import '../../css/o/olh21jifq.css';
import '../../css/v/vp3_m3b5w.css';
import '../../css/d/dmw5debfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ls-sv35we wm-k"/><path class="a7hn6vy_f wm-a"/><path class="olh21jifq wm-shadow"/><path class="vp3_m3b5w wm-k"/><path class="dmw5debfi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-spreadsheet-engrave"} {...others} />);
}

export default Component;
