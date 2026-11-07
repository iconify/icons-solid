import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b133qtshg.css';
import '../../css/o/oq5mzbcjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b133qtshg"/><path class="oq5mzbcjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-unread-bold-duotone"} {...others} />);
}

export default Component;
