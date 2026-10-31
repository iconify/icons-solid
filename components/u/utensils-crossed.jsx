import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yape4u-6m.css';
import '../../css/p/p2bdmybnx.css';
import '../../css/z/zvi15xv1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow yape4u-6m"/><path class="p2bdmybnx"/><path class="zvi15xv1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:utensils-crossed"} {...others} />);
}

export default Component;
