import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lgvsbdbea.css';
import '../../css/k/k1dc_j0wb.css';
import '../../css/y/yw-1u0bgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lgvsbdbea"/><path class="k1dc_j0wb"/><path class="yw-1u0bgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-brain-04"} {...others} />);
}

export default Component;
