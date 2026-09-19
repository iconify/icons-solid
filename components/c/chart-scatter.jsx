import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d1w58s-kb.css';
import '../../css/n/nh-ps30pw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d1w58s-kb"/><path class="nh-ps30pw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-scatter"} {...others} />);
}

export default Component;
