import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vwh_dab7b.css';
import '../../css/u/u9meep4ar.css';
import '../../css/b/bxjv56brc.css';
import '../../css/t/tc7pn6bgq.css';
import '../../css/q/qsqdynpdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vwh_dab7b wm-deco"/><path class="u9meep4ar wm-deco"/><path class="bxjv56brc wm-deco"/><path class="tc7pn6bgq wm-k"/><path class="qsqdynpdz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-robot-blueprint"} {...others} />);
}

export default Component;
