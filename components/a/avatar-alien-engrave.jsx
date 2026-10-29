import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jlvd7qbqe.css';
import '../../css/h/hj4r-nevc.css';
import '../../css/v/vdlyjmopo.css';
import '../../css/x/xrqeuen_t.css';
import '../../css/f/f0xsko-4b.css';
import '../../css/g/guqhbex6p.css';
import '../../css/s/s1kut8o6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jlvd7qbqe wm-k"/><path class="hj4r-nevc wm-a"/><path class="vdlyjmopo wm-s"/><path class="wm-shadow xrqeuen_t"/><path class="f0xsko-4b wm-k"/><path class="guqhbex6p wm-a"/><path class="s1kut8o6j wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-alien-engrave"} {...others} />);
}

export default Component;
