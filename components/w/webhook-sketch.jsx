import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mey_bqu0u.css';
import '../../css/t/t8w3xju4u.css';
import '../../css/h/h7v3tlb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mey_bqu0u wm-k"/><path class="t8w3xju4u wm-k"/><path class="h7v3tlb3w wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:webhook-sketch"} {...others} />);
}

export default Component;
