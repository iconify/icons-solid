import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j2683rt-e.css';
import '../../css/n/nufpf-yue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="j2683rt-e"/><path class="nufpf-yue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:arrow-left-right"} {...others} />);
}

export default Component;
