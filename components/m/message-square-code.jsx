import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zt-tqqxoo.css';
import '../../css/x/xmot4jaqv.css';
import '../../css/r/r-uur69rd.css';
import '../../css/l/l-im4mfov.css';
import '../../css/c/cp-ektmmr.css';
import '../../css/j/jg172-_hh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zt-tqqxoo"/><path class="xmot4jaqv"/><path class="r-uur69rd"/><path class="l-im4mfov"/><path class="cp-ektmmr"/><path class="jg172-_hh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:message-square-code"} {...others} />);
}

export default Component;
