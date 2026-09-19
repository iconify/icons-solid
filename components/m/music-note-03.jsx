import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/em1ya_npc.css';
import '../../css/d/dqapyabwu.css';
import '../../css/r/r7s9mbhvr.css';
import '../../css/q/q5x9t_bxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="em1ya_npc"/><circle class="dqapyabwu"/><path class="r7s9mbhvr"/><path class="q5x9t_bxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:music-note-03"} {...others} />);
}

export default Component;
