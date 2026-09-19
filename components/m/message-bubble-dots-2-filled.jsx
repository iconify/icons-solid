import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc5a1e5us.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hc5a1e5us"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-bubble-dots-2-filled"} {...others} />);
}

export default Component;
