import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ufl7asbzm.css';
import '../../css/s/si1njhr0s.css';
import '../../css/e/ee2yd8b-e.css';
import '../../css/m/m7q4dab8g.css';
import '../../css/d/dte3hl70l.css';
import '../../css/d/db-k5eyjv.css';
import '../../css/t/tqf7v624f.css';
import '../../css/k/k4e1qeula.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ufl7asbzm wm-shadow"/><path class="si1njhr0s wm-shadow"/><path class="ee2yd8b-e"/><path class="m7q4dab8g"/><path class="dte3hl70l"/><path class="db-k5eyjv"/><path class="tqf7v624f"/><path class="k4e1qeula"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:map"} {...others} />);
}

export default Component;
