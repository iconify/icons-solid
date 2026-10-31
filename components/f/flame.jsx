import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vjaep1dqm.css';
import '../../css/k/klljbqb3p.css';
import '../../css/d/dshwyu8ca.css';
import '../../css/m/mr014pb6e.css';
import '../../css/f/f5x4pnnvg.css';
import '../../css/g/gta7z3byx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vjaep1dqm wm-shadow"/><path class="klljbqb3p"/><path class="dshwyu8ca"/><path class="mr014pb6e"/><path class="f5x4pnnvg"/><path class="gta7z3byx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:flame"} {...others} />);
}

export default Component;
