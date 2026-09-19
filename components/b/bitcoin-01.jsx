import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d-0kgw10j.css';
import '../../css/j/jri0z7b3j.css';
import '../../css/x/xkzi28b7v.css';
import '../../css/m/ms-vbebhp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d-0kgw10j"/><path class="jri0z7b3j"/><path class="xkzi28b7v"/><path class="ms-vbebhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-01"} {...others} />);
}

export default Component;
