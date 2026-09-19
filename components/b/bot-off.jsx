import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wf2y1s6dv.css';
import '../../css/w/ws085pbck.css';
import '../../css/r/r4f-rbb3p.css';
import '../../css/q/qg5w9bb9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wf2y1s6dv"/><path class="ws085pbck"/><path class="r4f-rbb3p"/><path class="qg5w9bb9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bot-off"} {...others} />);
}

export default Component;
