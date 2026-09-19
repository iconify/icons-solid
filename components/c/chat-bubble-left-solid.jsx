import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frv633jts.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="frv633jts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chat-bubble-left-solid"} {...others} />);
}

export default Component;
