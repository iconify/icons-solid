import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/at8a73bhf.css';
import '../../css/f/f_32ei52f.css';
import '../../css/y/ymnguub2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="at8a73bhf wm-shadow"/><path class="f_32ei52f"/><path class="ymnguub2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:sparkles"} {...others} />);
}

export default Component;
