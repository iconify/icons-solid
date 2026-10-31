import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m5l09lw9e.css';
import '../../css/n/nd9377kmj.css';
import '../../css/k/kybbdjr2c.css';
import '../../css/f/fe1ja0b_n.css';
import '../../css/h/hpjrccjis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m5l09lw9e wm-k"/><path class="nd9377kmj wm-shine"/><path class="kybbdjr2c wm-shine"/><path class="fe1ja0b_n wm-shine"/><path class="hpjrccjis wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:mail"} {...others} />);
}

export default Component;
