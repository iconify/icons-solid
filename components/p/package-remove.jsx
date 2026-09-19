import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kyg4webhc.css';
import '../../css/q/q9tflhftz.css';
import '../../css/i/iem8lp2xo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kyg4webhc"/><path class="q9tflhftz"/><path class="iem8lp2xo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:package-remove"} {...others} />);
}

export default Component;
