import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zfv9git5q.css';
import '../../css/i/ihj0uzb-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="zfv9git5q"/><path class="ihj0uzb-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chopsticks"} {...others} />);
}

export default Component;
