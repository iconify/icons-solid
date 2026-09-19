import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r7-1hnbno.css';
import '../../css/m/mhdh2_n-m.css';
import '../../css/n/n13p1fvkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="r7-1hnbno"/><path class="mhdh2_n-m"/><path class="n13p1fvkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mushroom"} {...others} />);
}

export default Component;
