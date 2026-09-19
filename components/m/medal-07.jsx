import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dcrqkdcfz.css';
import '../../css/k/k6ksygb0l.css';
import '../../css/q/qnulcf71m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="dcrqkdcfz"/><path class="k6ksygb0l"/><circle class="qnulcf71m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:medal-07"} {...others} />);
}

export default Component;
