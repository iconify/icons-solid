import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdh9vvbir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mdh9vvbir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:message-chatbot-filled"} {...others} />);
}

export default Component;
