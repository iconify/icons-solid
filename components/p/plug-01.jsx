import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m1bq1f0kg.css';
import '../../css/t/tq3b1t0jd.css';
import '../../css/b/bw0_yfvdf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m1bq1f0kg"/><path class="tq3b1t0jd"/><path class="bw0_yfvdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:plug-01"} {...others} />);
}

export default Component;
