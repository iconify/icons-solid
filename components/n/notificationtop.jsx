import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-2g_-b-h.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="a-2g_-b-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:notificationtop"} {...others} />);
}

export default Component;
