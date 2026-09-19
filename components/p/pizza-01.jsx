import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/ndikalbbb.css';
import '../../css/g/g1go2ybet.css';
import '../../css/q/qzv-r3bgv.css';
import '../../css/n/n4_wdtbpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ndikalbbb"/><path class="g1go2ybet"/><path class="qzv-r3bgv"/><path class="n4_wdtbpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pizza-01"} {...others} />);
}

export default Component;
