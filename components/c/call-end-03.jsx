import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/dpgw88icc.css';
import '../../css/s/sez28gbff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="dpgw88icc"/><path class="sez28gbff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-end-03"} {...others} />);
}

export default Component;
