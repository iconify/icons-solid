import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/ke2a-ll4x.css';
import '../../css/b/b_q0iqbmp.css';
import '../../css/u/u752fxbbw.css';
import '../../css/i/i6r6qvb2q.css';
import '../../css/q/qje21_bkd.css';
import '../../css/j/jfi9_gbju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ke2a-ll4x wm-deco"/><path class="b_q0iqbmp wm-deco"/><path class="u752fxbbw wm-deco"/><path class="i6r6qvb2q wm-k"/><path class="qje21_bkd wm-a"/><path class="jfi9_gbju wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rocket-blueprint"} {...others} />);
}

export default Component;
