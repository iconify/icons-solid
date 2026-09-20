import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f57-ii-8e.css';
import '../../css/x/xyc-er8fc.css';
import '../../css/r/ry0y-4i3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f57-ii-8e"/><path class="xyc-er8fc"/><path class="ry0y-4i3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:videocamera-off-line-duotone"} {...others} />);
}

export default Component;
