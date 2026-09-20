import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0kudctye.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d0kudctye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:chat-two-bubbles-oval-remix"} {...others} />);
}

export default Component;
