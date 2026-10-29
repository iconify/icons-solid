import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/boiisobek.css';
import '../../css/b/bmmsbvbcs.css';
import '../../css/g/gv5fj_e6f.css';
import '../../css/z/zb6mz35nb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="boiisobek wm-k"/><path class="bmmsbvbcs wm-shadow"/><path class="gv5fj_e6f wm-k"/><path class="wm-a zb6mz35nb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:vr-headset-engrave"} {...others} />);
}

export default Component;
