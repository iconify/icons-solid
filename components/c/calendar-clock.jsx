import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sm_karjot.css';
import '../../css/m/m1iho-bvd.css';
import '../../css/r/rmz5vlbcs.css';
import '../../css/x/xflnghb0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="sm_karjot"/><path class="m1iho-bvd"/><circle class="rmz5vlbcs"/><path class="xflnghb0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:calendar-clock"} {...others} />);
}

export default Component;
