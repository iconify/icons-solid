import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rbpy15bdk.css';
import '../../css/u/uvsyy_17f.css';
import '../../css/q/qc8g0bcwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rbpy15bdk"/><path class="uvsyy_17f wm-k"/><path class="qc8g0bcwg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ticket-sketch"} {...others} />);
}

export default Component;
