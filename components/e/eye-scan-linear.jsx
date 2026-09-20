import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uama0jbpo.css';
import '../../css/i/ijwbgek4s.css';
import '../../css/j/jie9kjmui.css';
import '../../css/w/w1fn0ab-e.css';
import '../../css/p/ppbtr7vum.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uama0jbpo"/><path class="ijwbgek4s"/><path class="jie9kjmui"/><path class="w1fn0ab-e"/><path class="ppbtr7vum"/><circle class="h_tsn8bxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:eye-scan-linear"} {...others} />);
}

export default Component;
