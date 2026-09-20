import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7als0bth.css';
import '../../css/q/q34ffq4-g.css';
import '../../css/f/fvfvvcbbt.css';
import '../../css/s/szbuhgbtx.css';
import '../../css/d/dosijacls.css';
import '../../css/i/irdb5c_th.css';
import '../../css/i/izru05cfe.css';
import '../../css/c/c0_c9kbci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h7als0bth"/><path class="q34ffq4-g"/><path class="fvfvvcbbt"/><path class="szbuhgbtx"/><path class="dosijacls"/><path class="irdb5c_th"/><path class="izru05cfe"/><path class="c0_c9kbci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:truck-2"} {...others} />);
}

export default Component;
