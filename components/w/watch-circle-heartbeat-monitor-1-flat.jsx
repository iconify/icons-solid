import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p981e_i2q.css';
import '../../css/v/vkbhfiyrk.css';
import '../../css/t/twyt5qboj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p981e_i2q"/><path clip-rule="evenodd" class="vkbhfiyrk"/><path class="twyt5qboj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:watch-circle-heartbeat-monitor-1-flat"} {...others} />);
}

export default Component;
