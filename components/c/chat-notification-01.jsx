import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nn10_hvke.css';
import '../../css/n/n93c3rbwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nn10_hvke"/><path class="n93c3rbwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-notification-01"} {...others} />);
}

export default Component;
