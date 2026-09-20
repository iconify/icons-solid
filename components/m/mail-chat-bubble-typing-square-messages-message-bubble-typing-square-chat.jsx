import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wjlmgtb1b.css';
import '../../css/b/bulg8qnmj.css';
import '../../css/s/s-28vc1_s.css';
import '../../css/t/t5v0f6chl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="wjlmgtb1b"/><circle class="bulg8qnmj"/><circle class="s-28vc1_s"/><path class="t5v0f6chl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:mail-chat-bubble-typing-square-messages-message-bubble-typing-square-chat"} {...others} />);
}

export default Component;
