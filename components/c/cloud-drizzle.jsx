import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pn7bjw1pu.css';
import '../../css/j/jc8-2yimz.css';
import '../../css/o/otxh-bc8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="pn7bjw1pu wm-shadow"/><path class="jc8-2yimz"/><path class="otxh-bc8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cloud-drizzle"} {...others} />);
}

export default Component;
