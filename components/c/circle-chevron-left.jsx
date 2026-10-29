import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/arjjx2som.css';
import '../../css/l/l9d-kbw5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="arjjx2som"/><path class="l9d-kbw5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:circle-chevron-left"} {...others} />);
}

export default Component;
