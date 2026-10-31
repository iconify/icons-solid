import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdcz7gq1u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hdcz7gq1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-circle-dots-fill-round"} {...others} />);
}

export default Component;
