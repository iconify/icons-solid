import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xacu3z89s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xacu3z89s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:chat-smile-ai-line"} {...others} />);
}

export default Component;
