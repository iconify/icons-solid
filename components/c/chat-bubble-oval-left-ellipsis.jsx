import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czxf_zkwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="czxf_zkwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chat-bubble-oval-left-ellipsis"} {...others} />);
}

export default Component;
