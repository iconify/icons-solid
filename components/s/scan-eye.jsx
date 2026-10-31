import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/ckwd1hb4i.css';
import '../../css/b/b16p5jbue.css';
import '../../css/h/h-rapyb8q.css';
import '../../css/q/qj9egmsyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ckwd1hb4i wm-shadow"/><path class="b16p5jbue"/><path class="h-rapyb8q"/><path class="qj9egmsyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:scan-eye"} {...others} />);
}

export default Component;
