import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kdw-60bcj.css';
import '../../css/q/qgw9asb_i.css';
import '../../css/i/i0zlx3npb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kdw-60bcj"/><path class="qgw9asb_i"/><path class="i0zlx3npb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:text-subscript"} {...others} />);
}

export default Component;
