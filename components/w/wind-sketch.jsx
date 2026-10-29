import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/og2nw9byw.css';
import '../../css/r/r1j16t-3x.css';
import '../../css/h/h6uu6tbsk.css';
import '../../css/z/z9s7t3ynl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="og2nw9byw wm-k"/><path class="r1j16t-3x wm-a"/><path class="h6uu6tbsk wm-k"/><path class="wm-a z9s7t3ynl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wind-sketch"} {...others} />);
}

export default Component;
