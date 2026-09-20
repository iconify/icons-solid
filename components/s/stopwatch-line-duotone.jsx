import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p7p5oub5r.css';
import '../../css/p/pxm7_12cz.css';
import '../../css/u/u8gkuv4uz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p7p5oub5r"/><path class="pxm7_12cz"/><path class="u8gkuv4uz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stopwatch-line-duotone"} {...others} />);
}

export default Component;
