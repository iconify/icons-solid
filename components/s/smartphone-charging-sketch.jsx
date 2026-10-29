import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jg727-bmc.css';
import '../../css/c/c3tq19bps.css';
import '../../css/r/rnno1ib4f.css';
import '../../css/t/t1wdvofuo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jg727-bmc"/><path class="c3tq19bps wm-s"/><path class="rnno1ib4f wm-k"/><path class="t1wdvofuo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:smartphone-charging-sketch"} {...others} />);
}

export default Component;
