import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfpn6w7ca.css';
import '../../css/l/l48dfabzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rfpn6w7ca"/><path class="l48dfabzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-check-bold-duotone"} {...others} />);
}

export default Component;
