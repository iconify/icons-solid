import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_xmt2bmk.css';
import '../../css/c/ctx8crbxl.css';
import '../../css/n/ngw04v18d.css';
import '../../css/v/vq68gibcm.css';
import '../../css/t/t64gniboo.css';
import '../../css/q/q_h7d68af.css';
import '../../css/c/cdcvcdc9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n_xmt2bmk wm-k"/><path class="ctx8crbxl wm-deco"/><path class="ngw04v18d wm-k"/><path class="vq68gibcm wm-k"/><path class="t64gniboo wm-shadow"/><path class="q_h7d68af wm-shine"/><path class="cdcvcdc9x wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:radio"} {...others} />);
}

export default Component;
