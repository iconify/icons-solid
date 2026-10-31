import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ee-uq1beg.css';
import '../../css/m/mwongenbb.css';
import '../../css/u/upo0rhbsd.css';
import '../../css/i/imragy4sp.css';
import '../../css/p/phix8pbtg.css';
import '../../css/g/gy9wouf2y.css';
import '../../css/v/vf7tjzbwm.css';
import '../../css/s/snkxhwbhb.css';
import '../../css/t/t7h2lnu3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ee-uq1beg wm-shadow"/><path class="mwongenbb"/><path class="upo0rhbsd"/><path class="imragy4sp"/><path class="phix8pbtg"/><path class="gy9wouf2y wm-s"/><path class="vf7tjzbwm wm-s"/><path class="snkxhwbhb"/><path class="t7h2lnu3b wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:user-search"} {...others} />);
}

export default Component;
