import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p65p1hbxh.css';
import '../../css/i/ix2yyfqqg.css';
import '../../css/n/nv6qhg7zp.css';
import '../../css/s/sxx_hdb0w.css';
import '../../css/h/hbj0uabzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p65p1hbxh"/><path class="ix2yyfqqg"/><path class="nv6qhg7zp"/><path class="sxx_hdb0w"/><path class="hbj0uabzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-3-line-duotone"} {...others} />);
}

export default Component;
