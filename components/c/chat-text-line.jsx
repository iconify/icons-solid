import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp7gpgbbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fp7gpgbbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:chat-text-line"} {...others} />);
}

export default Component;
