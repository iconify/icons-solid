import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc8x28-3v.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="gc8x28-3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:chat-bubble-typing-oval-solid"} {...others} />);
}

export default Component;
