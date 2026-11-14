import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/dpgw88icc.css';
import '../../css/g/gy3gumllh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="dpgw88icc"/><path class="gy3gumllh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-blocked-02"} {...others} />);
}

export default Component;
