import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tv52zef1n.css';
import '../../css/u/uh1d8_fpw.css';
import '../../css/w/wz1pknvhc.css';
import '../../css/n/nud-_ddik.css';
import '../../css/n/nlkwqmkhw.css';
import '../../css/e/erin3ebtl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="tv52zef1n wm-shadow"/><path class="uh1d8_fpw"/><path class="wz1pknvhc"/><path class="nud-_ddik"/><path class="nlkwqmkhw"/><path class="erin3ebtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:container"} {...others} />);
}

export default Component;
