import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ejyg5ybet.css';
import '../../css/v/vxoc_pbww.css';
import '../../css/i/ij72ljbex.css';
import '../../css/e/eez02jb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ejyg5ybet wm-k"/><path class="vxoc_pbww wm-shadow"/><path class="ij72ljbex wm-k"/><path class="eez02jb3b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:marigold-engrave"} {...others} />);
}

export default Component;
