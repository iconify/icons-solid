import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zt-tqqxoo.css';
import '../../css/s/siv_bsrfa.css';
import '../../css/u/u097dcb6i.css';
import '../../css/s/s08sg_bgh.css';
import '../../css/c/cp-ektmmr.css';
import '../../css/u/uq1x7cb8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zt-tqqxoo"/><path class="siv_bsrfa"/><path class="u097dcb6i"/><path class="s08sg_bgh"/><path class="cp-ektmmr"/><path class="uq1x7cb8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bot-message-square"} {...others} />);
}

export default Component;
