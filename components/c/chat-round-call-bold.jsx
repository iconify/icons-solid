import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lja_-7uem.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lja_-7uem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-call-bold"} {...others} />);
}

export default Component;
