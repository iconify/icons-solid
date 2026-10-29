import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dp04q_i-b.css';
import '../../css/a/atb3k23ro.css';
import '../../css/f/fwuicyddt.css';
import '../../css/u/u-tk08bep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dp04q_i-b"/><path class="atb3k23ro wm-a"/><path class="fwuicyddt wm-k"/><path class="u-tk08bep wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:choco-strawberry-sketch"} {...others} />);
}

export default Component;
