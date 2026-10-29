import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_lm2xb_c.css';
import '../../css/n/nx4uguqix.css';
import '../../css/h/h_aywibxt.css';
import '../../css/g/g-k_eacqx.css';
import '../../css/u/uwo-73bmi.css';
import '../../css/x/x1rgpz0am.css';
import '../../css/n/nwp1znumy.css';
import '../../css/o/ow95dyblo.css';
import '../../css/m/mympsjbkx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a_lm2xb_c wm-shadow"/><path class="nx4uguqix wm-shadow"/><path class="h_aywibxt"/><path class="g-k_eacqx"/><path class="uwo-73bmi"/><path class="x1rgpz0am"/><path class="nwp1znumy wm-shine"/><path class="ow95dyblo wm-shine"/><path class="mympsjbkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:corner-up-right"} {...others} />);
}

export default Component;
