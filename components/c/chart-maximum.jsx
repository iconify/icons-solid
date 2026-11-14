import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nh-ps30pw.css';
import '../../css/p/pdhr7iswv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nh-ps30pw"/><path class="pdhr7iswv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-maximum"} {...others} />);
}

export default Component;
