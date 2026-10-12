import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uogjtkbzd.css';
import '../../css/w/wx40tbxfq.css';
import '../../css/m/mk4imu_bm.css';
import '../../css/n/n0nm-ukwf.css';
import '../../css/n/neu_sytpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uogjtkbzd"/><path class="wx40tbxfq"/><path class="mk4imu_bm"/><path class="n0nm-ukwf"/><path class="neu_sytpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shrimp-duotone"} {...others} />);
}

export default Component;
