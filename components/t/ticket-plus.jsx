import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/orsbbcbcm.css';
import '../../css/e/ezrbkl_rs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="orsbbcbcm"/><path class="ezrbkl_rs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ticket-plus"} {...others} />);
}

export default Component;
