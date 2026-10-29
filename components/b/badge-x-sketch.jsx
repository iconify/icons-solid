import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/ryy5dkt3h.css';
import '../../css/r/r9qeinbko.css';
import '../../css/j/j5e0pebko.css';
import '../../css/v/vt4fvacch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ryy5dkt3h"/><path class="r9qeinbko wm-a"/><path class="j5e0pebko wm-k"/><path class="vt4fvacch wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:badge-x-sketch"} {...others} />);
}

export default Component;
