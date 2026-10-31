import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s6vrvtbpx.css';
import '../../css/v/v-lmw3bvn.css';
import '../../css/b/b9tic4bwm.css';
import '../../css/r/roeujbh9w.css';
import '../../css/g/giuw_dx_q.css';
import '../../css/q/q5xn0573n.css';
import '../../css/r/ryw1d42tp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="s6vrvtbpx"/><path class="v-lmw3bvn"/><path class="b9tic4bwm wm-k"/><path class="roeujbh9w wm-a"/><path class="giuw_dx_q"/><path class="q5xn0573n"/><path class="ryw1d42tp wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:salad"} {...others} />);
}

export default Component;
