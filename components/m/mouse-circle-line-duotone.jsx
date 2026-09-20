import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nr28dlb2d.css';
import '../../css/f/f6a82rrqn.css';
import '../../css/b/b6enbdbml.css';
import '../../css/y/ywyqt1-eg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nr28dlb2d"/><path class="f6a82rrqn"/><path class="b6enbdbml"/><path class="ywyqt1-eg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mouse-circle-line-duotone"} {...others} />);
}

export default Component;
