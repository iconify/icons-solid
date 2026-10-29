import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7fuy-3ga.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/t3912xb6v.css';
import '../../css/c/c0yksccyn.css';
import '../../css/g/g3ojon7vx.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jvb8byb7v.css';
import '../../css/c/cg35qubhm.css';
import '../../css/a/ao8aq9rbu.css';
import '../../css/u/ug799plhe.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGwutOUclO" class="p7fuy-3ga"/></defs><g class="t_2lkqbxb"><path class="t3912xb6v wm-shadow"/><path class="c0yksccyn"/><path class="g3ojon7vx"/><use href="#SVGwutOUclO" class="d2kvgvbvc"/><path class="jvb8byb7v"/><use href="#SVGwutOUclO" class="d2kvgvbvc"/><path class="cg35qubhm"/><path class="ao8aq9rbu"/><path class="ug799plhe wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:stethoscope"} {...others} />);
}

export default Component;
