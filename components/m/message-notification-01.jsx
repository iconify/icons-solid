import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lzat6bccq.css';
import '../../css/i/ix74hpb0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lzat6bccq"/><path class="ix74hpb0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-notification-01"} {...others} />);
}

export default Component;
