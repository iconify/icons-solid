import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-0wsmbwk.css';
import '../../css/x/x3yzopyze.css';
import '../../css/s/s1bj---5h.css';
import '../../css/l/lt_f0mcqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d-0wsmbwk"/><rect class="x3yzopyze"/><path class="s1bj---5h"/><path class="lt_f0mcqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:fire-extinguisher"} {...others} />);
}

export default Component;
