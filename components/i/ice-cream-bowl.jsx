import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pnr685b4k.css';
import '../../css/k/ktcd19tof.css';
import '../../css/t/t0lzcmb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pnr685b4k"/><path class="ktcd19tof"/><path class="t0lzcmb5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ice-cream-bowl"} {...others} />);
}

export default Component;
