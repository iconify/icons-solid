import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i8w9fnzek.css';
import '../../css/u/u38li23ly.css';
import '../../css/a/av3v-z7br.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="i8w9fnzek"/><path class="u38li23ly"/><path class="av3v-z7br"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:mail-smiley-happy-mask-chat-message-smiley-smile-emoji-mask"} {...others} />);
}

export default Component;
