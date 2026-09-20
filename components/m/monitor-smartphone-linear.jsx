import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/ms5m5udxx.css';
import '../../css/r/rvg5dwd0q.css';
import '../../css/k/k4bytsftl.css';
import '../../css/y/y9tr5ob5n.css';
import '../../css/f/fy4iaqidn.css';
import '../../css/v/v31cxj-zs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ms5m5udxx"/><path class="rvg5dwd0q"/><path class="k4bytsftl"/><path class="y9tr5ob5n"/><path class="fy4iaqidn"/><path class="v31cxj-zs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-smartphone-linear"} {...others} />);
}

export default Component;
