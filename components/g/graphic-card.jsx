import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sa5laccie.css';
import '../../css/m/mu2-t05hv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sa5laccie"/><path class="mu2-t05hv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:graphic-card"} {...others} />);
}

export default Component;
