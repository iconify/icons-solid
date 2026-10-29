import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i5xb24-5j.css';
import '../../css/g/g3oghpbhf.css';
import '../../css/j/j9q42rbzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="i5xb24-5j wm-k"/><path class="g3oghpbhf"/><path class="j9q42rbzm wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:spell-check"} {...others} />);
}

export default Component;
