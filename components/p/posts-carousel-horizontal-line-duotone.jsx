import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ckbwmibsq.css';
import '../../css/n/njzclob-l.css';
import '../../css/w/w_5s4mbtp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ckbwmibsq"/><path class="njzclob-l"/><path class="w_5s4mbtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:posts-carousel-horizontal-line-duotone"} {...others} />);
}

export default Component;
