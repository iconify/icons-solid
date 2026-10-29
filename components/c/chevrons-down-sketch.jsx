import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h9c6-6b9c.css';
import '../../css/t/towxrt7ua.css';
import '../../css/h/ho37u6b_q.css';
import '../../css/h/hqkt4rbrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="h9c6-6b9c wm-k"/><path class="towxrt7ua wm-k"/><path class="ho37u6b_q wm-a"/><path class="hqkt4rbrv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevrons-down-sketch"} {...others} />);
}

export default Component;
