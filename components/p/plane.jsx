import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/te3jwqb5y.css';
import '../../css/j/jvisngbms.css';
import '../../css/s/ss9vinbaa.css';
import '../../css/r/rv4gpx42z.css';
import '../../css/v/viajx150y.css';
import '../../css/k/knv3bfb7w.css';
import '../../css/i/i9dts4b9x.css';
import '../../css/u/upmnibc7k.css';
import '../../css/h/hr_m30bsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="te3jwqb5y wm-shadow"/><path class="jvisngbms wm-k"/><path class="ss9vinbaa wm-k"/><path class="rv4gpx42z wm-k"/><path class="viajx150y wm-k"/><path class="knv3bfb7w wm-shine"/><path class="i9dts4b9x wm-k"/><path class="upmnibc7k wm-k"/><path class="hr_m30bsj wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:plane"} {...others} />);
}

export default Component;
