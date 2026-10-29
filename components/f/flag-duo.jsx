import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vkifygbeq.css';
import '../../css/v/vs3_2yq5q.css';
import '../../css/z/zbms0lbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vkifygbeq"/><path class="vs3_2yq5q wm-a"/><path class="zbms0lbwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flag-duo"} {...others} />);
}

export default Component;
