import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k1wrqe_ht.css';
import '../../css/i/i2oi9shbo.css';
import '../../css/q/q9-5m7ymk.css';
import '../../css/d/dxhoj-bmr.css';
import '../../css/g/gzr0zyb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k1wrqe_ht"/><path class="i2oi9shbo"/><path class="q9-5m7ymk"/><path class="dxhoj-bmr"/><path class="gzr0zyb3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-minimalistic-line-duotone"} {...others} />);
}

export default Component;
