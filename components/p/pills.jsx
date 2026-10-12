import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ipm_x9bqq.css';
import '../../css/k/kzycwm8wn.css';
import '../../css/w/wrdvgsnvo.css';
import '../../css/f/fd6hx_eja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-16.058 55.576 -3.15)skewX(-.252)" class="ipm_x9bqq"/><rect transform="matrix(-.96098 -.27661 -.27239 .96219 21.01 9.86)" class="kzycwm8wn"/><rect transform="rotate(-16.058 29.662 .388)skewX(-.252)" class="wrdvgsnvo"/><rect transform="matrix(-.96098 -.27661 -.27239 .96219 23 2.83)" class="wrdvgsnvo"/><path class="fd6hx_eja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pills"} {...others} />);
}

export default Component;
