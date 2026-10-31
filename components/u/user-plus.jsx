import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v03jynzrb.css';
import '../../css/t/tie_amhlk.css';
import '../../css/e/emha3wbqe.css';
import '../../css/f/f86q_5yiw.css';
import '../../css/x/xnwmb0bnc.css';
import '../../css/s/skuj7h5uh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="v03jynzrb"/><path class="tie_amhlk wm-shine"/><path class="emha3wbqe wm-k"/><path class="f86q_5yiw wm-s"/><path class="xnwmb0bnc"/><path class="skuj7h5uh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:user-plus"} {...others} />);
}

export default Component;
