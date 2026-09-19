import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/on8brm2_q.css';
import '../../css/o/orsbbcbcm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="on8brm2_q"/><path class="orsbbcbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ticket-x"} {...others} />);
}

export default Component;
