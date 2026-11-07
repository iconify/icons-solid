import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nlh-17byn.css';
import '../../css/u/u4qnnrb5s.css';
import '../../css/f/fppjq7biv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nlh-17byn"/><path class="u4qnnrb5s"/><path class="fppjq7biv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-off-line-duotone"} {...others} />);
}

export default Component;
