import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/i/i--uv4_1j.css';
import '../../css/q/qdfga7bwc.css';
import '../../css/m/my3lq243u.css';
import '../../css/u/usaqtc2si.css';
import '../../css/p/ph0rc3bdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="i--uv4_1j"/><path class="qdfga7bwc"/><path class="my3lq243u"/><path class="usaqtc2si"/><path class="ph0rc3bdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:square-code"} {...others} />);
}

export default Component;
