import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf6woy2-u.css';
import '../../css/m/mr124pbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sf6woy2-u"/><path clip-rule="evenodd" class="mr124pbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:chat-outline"} {...others} />);
}

export default Component;
