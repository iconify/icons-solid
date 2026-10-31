import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d-3rr5b8k.css';
import '../../css/j/ja7wz_ben.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d-3rr5b8k"/><path class="ja7wz_ben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-conversation-circle-duocolor-round"} {...others} />);
}

export default Component;
