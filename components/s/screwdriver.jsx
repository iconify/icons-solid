import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uhbq_rs1x.css';
import '../../css/d/dcgvrdbxk.css';
import '../../css/a/aljmnkxoj.css';
import '../../css/y/y_58e9y5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="uhbq_rs1x wm-shadow"/><path class="dcgvrdbxk"/><path class="aljmnkxoj"/><path class="y_58e9y5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:screwdriver"} {...others} />);
}

export default Component;
