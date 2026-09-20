import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ovu9dzm8y.css';
import '../../css/z/zy5mcfmls.css';
import '../../css/y/ygi3hj8ab.css';
import '../../css/y/y_ezged7l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="ovu9dzm8y"/><circle class="zy5mcfmls"/><circle class="ygi3hj8ab"/><path class="y_ezged7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:mail-chat-bubble-typing-oval-messages-message-bubble-typing-chat"} {...others} />);
}

export default Component;
