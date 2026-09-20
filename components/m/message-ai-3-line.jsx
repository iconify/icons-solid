import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frp7i3eut.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="frp7i3eut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:message-ai-3-line"} {...others} />);
}

export default Component;
