import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mwidq8eyg.css';
import '../../css/w/wcn5vdzhi.css';
import '../../css/p/ps0g5sbmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mwidq8eyg"/><path class="wcn5vdzhi"/><path class="ps0g5sbmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:mouse-duotone"} {...others} />);
}

export default Component;
