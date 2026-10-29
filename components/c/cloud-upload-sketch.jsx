import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f2muu1bnt.css';
import '../../css/p/pnyxl532q.css';
import '../../css/u/uqh-4c7rl.css';
import '../../css/n/npzunlt5o.css';
import '../../css/i/ik3xy0-cl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f2muu1bnt"/><path class="pnyxl532q wm-k"/><path class="uqh-4c7rl wm-k"/><path class="npzunlt5o wm-s"/><path class="ik3xy0-cl wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-upload-sketch"} {...others} />);
}

export default Component;
