import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lavlmcboo.css';
import '../../css/r/rwc9qrbec.css';
import '../../css/p/p2_8outck.css';
import '../../css/q/qlmagob2a.css';
import '../../css/p/pc21kri-s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="lavlmcboo"/><path class="rwc9qrbec"/><path class="p2_8outck"/><path class="qlmagob2a"/><path class="pc21kri-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:perfume-duo"} {...others} />);
}

export default Component;
