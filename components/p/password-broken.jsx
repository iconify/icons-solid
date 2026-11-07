import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cpqoopb6x.css';
import '../../css/u/ucmhfwbcn.css';
import '../../css/k/kom0ajijq.css';
import '../../css/s/spvw1m4wo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cpqoopb6x"/><path class="ucmhfwbcn"/><path class="kom0ajijq"/><path class="spvw1m4wo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-broken"} {...others} />);
}

export default Component;
