import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v4lrv2biy.css';
import '../../css/r/rm13uvhhl.css';
import '../../css/c/ckykf2bsg.css';
import '../../css/v/vewmsebxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v4lrv2biy wm-k"/><path class="rm13uvhhl wm-a"/><path class="ckykf2bsg wm-k"/><path class="vewmsebxy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bed-sketch"} {...others} />);
}

export default Component;
