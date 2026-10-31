import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzn4wdozi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xzn4wdozi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-sparkle-round"} {...others} />);
}

export default Component;
