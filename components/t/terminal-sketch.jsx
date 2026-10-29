import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o4qq2hmsv.css';
import '../../css/r/re7id0y1c.css';
import '../../css/s/sx20ad8rv.css';
import '../../css/u/unn-0zbjb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="o4qq2hmsv"/><path class="re7id0y1c wm-a"/><path class="sx20ad8rv wm-k"/><path class="unn-0zbjb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:terminal-sketch"} {...others} />);
}

export default Component;
