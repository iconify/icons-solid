import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fl-r0ubyd.css';
import '../../css/v/vyxnsdbwc.css';
import '../../css/p/p5tdlubsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fl-r0ubyd"/><path class="vyxnsdbwc"/><path class="p5tdlubsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:steak"} {...others} />);
}

export default Component;
