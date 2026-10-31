import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zt-tqqxoo.css';
import '../../css/q/qe_89-bfy.css';
import '../../css/l/l-ng25oml.css';
import '../../css/d/d3ogl-3th.css';
import '../../css/o/oekj-wdez.css';
import '../../css/f/f23-uqnwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zt-tqqxoo"/><path class="qe_89-bfy"/><path class="l-ng25oml"/><path class="d3ogl-3th"/><path class="oekj-wdez"/><path class="f23-uqnwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:message-square-text"} {...others} />);
}

export default Component;
