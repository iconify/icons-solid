import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tfs-l-vfz.css';
import '../../css/q/q9vwbdbmq.css';
import '../../css/l/lp_m7xb0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tfs-l-vfz"/><path class="q9vwbdbmq"/><path class="lp_m7xb0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-up-left-down-right-duo"} {...others} />);
}

export default Component;
