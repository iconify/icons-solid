import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g3806gb-b.css';
import '../../css/j/jfdf9lbir.css';
import '../../css/j/j-oll0j4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="g3806gb-b"/><path class="jfdf9lbir"/><path class="j-oll0j4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:split"} {...others} />);
}

export default Component;
