import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c86_pkcpy.css';
import '../../css/k/ku_46mpxr.css';
import '../../css/n/n8izo4b6v.css';
import '../../css/u/uip_160je.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c86_pkcpy wm-k"/><path class="ku_46mpxr wm-a"/><path class="n8izo4b6v wm-k"/><path class="uip_160je wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:undo-sketch"} {...others} />);
}

export default Component;
