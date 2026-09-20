import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/ji7z9becj.css';
import '../../css/k/kt6370brf.css';
import '../../css/p/p7xp9ghjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ji7z9becj"/><path class="kt6370brf"/><path class="p7xp9ghjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:broom-linear"} {...others} />);
}

export default Component;
