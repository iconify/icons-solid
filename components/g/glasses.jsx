import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y3ar07z2a.css';
import '../../css/v/vvzj0mb4r.css';
import '../../css/b/bg2vk4igj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow y3ar07z2a"/><path class="vvzj0mb4r"/><path class="bg2vk4igj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:glasses"} {...others} />);
}

export default Component;
