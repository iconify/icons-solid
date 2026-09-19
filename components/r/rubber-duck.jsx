import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g33dr_b1f.css';
import '../../css/n/n2ckldr-l.css';
import '../../css/d/dlvig_bmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="g33dr_b1f"/><path class="n2ckldr-l"/><path class="dlvig_bmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rubber-duck"} {...others} />);
}

export default Component;
