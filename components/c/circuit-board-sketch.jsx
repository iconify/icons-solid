import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p02usd09d.css';
import '../../css/d/di-npsbsf.css';
import '../../css/e/e9s7nacvv.css';
import '../../css/y/ydrhx_bvj.css';
import '../../css/x/xl0su_7tq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="p02usd09d"/><path class="di-npsbsf wm-k"/><path class="e9s7nacvv wm-k"/><path class="wm-a ydrhx_bvj"/><path class="wm-a xl0su_7tq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circuit-board-sketch"} {...others} />);
}

export default Component;
