import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/ckgc1uv9a.css';
import '../../css/q/qtcqmbb6o.css';
import '../../css/s/s363k5b3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ckgc1uv9a wm-k"/><path class="qtcqmbb6o"/><path class="s363k5b3y wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:flip-horizontal"} {...others} />);
}

export default Component;
