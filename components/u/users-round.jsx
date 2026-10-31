import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wkmqm0bou.css';
import '../../css/t/t0q_83c6j.css';
import '../../css/z/zc3j4ib-b.css';
import '../../css/s/s9j5y_3-b.css';
import '../../css/z/zt6r97ulh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wkmqm0bou wm-shadow"/><path class="t0q_83c6j"/><path class="zc3j4ib-b"/><path class="s9j5y_3-b"/><path class="zt6r97ulh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:users-round"} {...others} />);
}

export default Component;
