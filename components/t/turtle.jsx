import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sqgh40uxn.css';
import '../../css/l/llbpx1juk.css';
import '../../css/n/nm4ik8v_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="sqgh40uxn"/><path class="llbpx1juk"/><path class="nm4ik8v_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:turtle"} {...others} />);
}

export default Component;
