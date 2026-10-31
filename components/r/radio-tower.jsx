import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/krwoeccgz.css';
import '../../css/h/howolopok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="krwoeccgz"/><path class="howolopok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:radio-tower"} {...others} />);
}

export default Component;
