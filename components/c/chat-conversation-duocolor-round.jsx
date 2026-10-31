import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iin6arb5t.css';
import '../../css/i/ixfd0uity.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iin6arb5t"/><path class="ixfd0uity"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-conversation-duocolor-round"} {...others} />);
}

export default Component;
