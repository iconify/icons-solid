import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f_-aaibse.css';
import '../../css/t/tx8onvulw.css';
import '../../css/a/ayo4sbmku.css';
import '../../css/u/u5ywn2hcc.css';
import '../../css/o/o4y1xcbsa.css';
import '../../css/f/ftfqrc6xo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="f_-aaibse wm-shadow"/><path class="tx8onvulw"/><path class="ayo4sbmku"/><path class="u5ywn2hcc"/><path class="o4y1xcbsa"/><path class="ftfqrc6xo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cloud-check"} {...others} />);
}

export default Component;
