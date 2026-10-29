import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bhy4-61wh.css';
import '../../css/i/iwu-0yrln.css';
import '../../css/k/kyiupabxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bhy4-61wh"/><path class="iwu-0yrln wm-a"/><path class="kyiupabxi wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flip-horizontal"} {...others} />);
}

export default Component;
