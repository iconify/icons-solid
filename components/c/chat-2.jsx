import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kot-p6b-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kot-p6b-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:chat-2"} {...others} />);
}

export default Component;
