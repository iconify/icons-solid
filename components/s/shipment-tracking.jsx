import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nzbdwybwc.css';
import '../../css/r/rm1_dwcor.css';
import '../../css/m/meyrv7bsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="nzbdwybwc"/><path class="rm1_dwcor"/><path class="meyrv7bsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shipment-tracking"} {...others} />);
}

export default Component;
