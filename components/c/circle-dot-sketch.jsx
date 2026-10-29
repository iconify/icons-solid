import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vgn90vbzq.css';
import '../../css/q/qrlq0qbok.css';
import '../../css/e/ede8hbb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vgn90vbzq"/><path class="qrlq0qbok wm-k"/><path class="ede8hbb4d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-dot-sketch"} {...others} />);
}

export default Component;
