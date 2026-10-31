import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w9d86vzew.css';
import '../../css/m/m53vvj0ce.css';
import '../../css/f/fhd0kpbqw.css';
import '../../css/w/w2bv2ybgo.css';
import '../../css/d/dc4pb-bwi.css';
import '../../css/c/c2l8v8ijg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="w9d86vzew wm-shadow"/><path class="m53vvj0ce"/><path class="fhd0kpbqw"/><path class="w2bv2ybgo"/><path class="dc4pb-bwi"/><path class="c2l8v8ijg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:sidebar"} {...others} />);
}

export default Component;
