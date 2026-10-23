import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wlqo8j6qy.css';
import '../../css/h/h3efcf3fr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wlqo8j6qy"/><path class="h3efcf3fr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:handshake"} {...others} />);
}

export default Component;
