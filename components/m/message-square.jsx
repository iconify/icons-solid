import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zt-tqqxoo.css';
import '../../css/s/siv_bsrfa.css';
import '../../css/g/gwp1f4bzd.css';
import '../../css/o/o2bj_fb1i.css';
import '../../css/c/cp-ektmmr.css';
import '../../css/n/nbi4alboy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zt-tqqxoo"/><path class="siv_bsrfa"/><path class="gwp1f4bzd"/><path class="o2bj_fb1i"/><path class="cp-ektmmr"/><path class="nbi4alboy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:message-square"} {...others} />);
}

export default Component;
