import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9ebcobve.css';
import '../../css/q/qar8wh0mq.css';
import '../../css/t/tyfmt0bnl.css';
import '../../css/i/i6ntusbzm.css';
import '../../css/j/jydfl8b_u.css';
import '../../css/c/crj7_j6ae.css';
import '../../css/b/b1mu1-bfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p9ebcobve wm-a"/><path class="qar8wh0mq wm-a"/><path class="tyfmt0bnl wm-a"/><path class="i6ntusbzm wm-k"/><path class="jydfl8b_u wm-k"/><path class="crj7_j6ae wm-k"/><path class="b1mu1-bfy wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:cloud-rain-wind"} {...others} />);
}

export default Component;
