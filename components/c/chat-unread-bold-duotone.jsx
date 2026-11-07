import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b133qtshg.css';
import '../../css/a/aoju1jbug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b133qtshg"/><path class="aoju1jbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-unread-bold-duotone"} {...others} />);
}

export default Component;
