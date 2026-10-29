import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ymm2nhd-k.css';
import '../../css/m/m6g9ed77n.css';
import '../../css/r/ri15-6vbx.css';
import '../../css/m/mkbyrcbue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ymm2nhd-k"/><path class="m6g9ed77n wm-a"/><path class="ri15-6vbx wm-k"/><path class="mkbyrcbue wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:badge-dollar-sign-sketch"} {...others} />);
}

export default Component;
