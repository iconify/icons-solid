import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c6f3gjbpc.css';
import '../../css/t/tm9rjtb7h.css';
import '../../css/o/ou--dacom.css';
import '../../css/q/qo_bukb7u.css';
import '../../css/n/nlxhy-_vt.css';
import '../../css/h/h9f1s1bpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c6f3gjbpc"/><path class="tm9rjtb7h wm-k"/><path class="ou--dacom wm-s"/><path class="qo_bukb7u wm-k"/><path class="nlxhy-_vt wm-a"/><path class="h9f1s1bpy wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-clock-sketch"} {...others} />);
}

export default Component;
