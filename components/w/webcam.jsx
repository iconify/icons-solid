import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mvulunrwx.css';
import '../../css/e/ehts4z5xj.css';
import '../../css/i/i6p42p1_a.css';
import '../../css/y/yk5qni75w.css';
import '../../css/o/oqbjcvb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mvulunrwx wm-shadow"/><path class="ehts4z5xj"/><path class="i6p42p1_a"/><path class="yk5qni75w"/><path class="oqbjcvb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:webcam"} {...others} />);
}

export default Component;
