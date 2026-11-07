import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oos2x6mvr.css';
import '../../css/r/rumgkrbdt.css';
import '../../css/j/joig5dakl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="oos2x6mvr"/><path class="rumgkrbdt"/><path class="joig5dakl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-broken"} {...others} />);
}

export default Component;
