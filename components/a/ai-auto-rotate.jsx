import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xgco95bzv.css';
import '../../css/m/mt1-zg82v.css';
import '../../css/c/c-q4twgtg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xgco95bzv"/><path class="mt1-zg82v"/><path class="c-q4twgtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-auto-rotate"} {...others} />);
}

export default Component;
