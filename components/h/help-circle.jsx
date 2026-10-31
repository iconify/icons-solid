import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/m/m8uj4nbtw.css';
import '../../css/v/v5dnxtbab.css';
import '../../css/h/hs3f4guij.css';
import '../../css/l/l0ypjb6_a.css';
import '../../css/g/gs5pqpbbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="m8uj4nbtw"/><path class="v5dnxtbab"/><path class="hs3f4guij"/><path class="l0ypjb6_a"/><path class="gs5pqpbbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:help-circle"} {...others} />);
}

export default Component;
