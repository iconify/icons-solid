import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f_hoxjmun.css';
import '../../css/f/f6jryfoml.css';
import '../../css/s/s8lza-b-b.css';
import '../../css/s/s0uk8_bdj.css';
import '../../css/f/f9b4d59gs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f_hoxjmun wm-k"/><path class="f6jryfoml wm-s"/><path class="s8lza-b-b wm-shadow"/><path class="s0uk8_bdj wm-k"/><path class="f9b4d59gs wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:filter-x-engrave"} {...others} />);
}

export default Component;
