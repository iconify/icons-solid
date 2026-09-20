import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t97j7k4tz.css';
import '../../css/w/wxgkmbcpg.css';
import '../../css/s/s-9-v86id.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t97j7k4tz"><path class="wxgkmbcpg"/><path class="s-9-v86id"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chat-alt-2-duotone-line"} {...others} />);
}

export default Component;
