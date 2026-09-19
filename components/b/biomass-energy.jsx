import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kk06kcbsy.css';
import '../../css/e/ek023yb_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kk06kcbsy"/><path class="ek023yb_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:biomass-energy"} {...others} />);
}

export default Component;
