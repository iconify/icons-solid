import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oercq_b8v.css';
import '../../css/f/fympz7aff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="oercq_b8v wm-k"/><path class="fympz7aff wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:moon-star"} {...others} />);
}

export default Component;
