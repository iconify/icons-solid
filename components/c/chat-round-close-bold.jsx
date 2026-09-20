import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se67ui62b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="se67ui62b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-close-bold"} {...others} />);
}

export default Component;
