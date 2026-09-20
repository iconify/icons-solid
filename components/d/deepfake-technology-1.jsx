import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/x4rk3mbhi.css';
import '../../css/i/i6vakbcqv.css';
import '../../css/r/rs0hqw4td.css';
import '../../css/q/q99wq3b9o.css';
import '../../css/p/p4d9q_bps.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="x4rk3mbhi"/><path class="i6vakbcqv"/><path class="rs0hqw4td"/><path class="q99wq3b9o"/><path class="p4d9q_bps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:deepfake-technology-1"} {...others} />);
}

export default Component;
