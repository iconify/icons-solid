import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e_71410md.css';
import '../../css/q/qy44fxbnk.css';
import '../../css/u/ux6wzzm4e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e_71410md"/><path class="qy44fxbnk"/><path class="ux6wzzm4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-calling-linear"} {...others} />);
}

export default Component;
