import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vptemybwm.css';
import '../../css/l/l5t4kvb6g.css';
import '../../css/u/ucje65n3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="vptemybwm"/><path class="l5t4kvb6g"/><path class="ucje65n3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clipboard-clock"} {...others} />);
}

export default Component;
