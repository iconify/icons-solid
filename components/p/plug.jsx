import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ay0m16bue.css';
import '../../css/f/fg5rldbes.css';
import '../../css/n/nfjdjjbjl.css';
import '../../css/e/ec53gwbhp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ay0m16bue wm-shadow"/><path class="fg5rldbes"/><path class="nfjdjjbjl"/><path class="ec53gwbhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:plug"} {...others} />);
}

export default Component;
