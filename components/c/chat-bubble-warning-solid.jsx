import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmazutb9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qmazutb9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:chat-bubble-warning-solid"} {...others} />);
}

export default Component;
