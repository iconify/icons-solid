import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d1nr0kbus.css';
import '../../css/e/ery8ubcec.css';
import '../../css/e/ez-qsfbbw.css';
import '../../css/d/dfwb8nbeu.css';
import '../../css/j/jfqizobld.css';
import '../../css/p/p9665tbyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="d1nr0kbus wm-shadow"/><path class="ery8ubcec"/><path class="ez-qsfbbw"/><path class="dfwb8nbeu"/><path class="jfqizobld"/><path class="p9665tbyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:building"} {...others} />);
}

export default Component;
