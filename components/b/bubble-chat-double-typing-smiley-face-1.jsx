import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/odggh3bzu.css';
import '../../css/q/qbq4lkoox.css';
import '../../css/v/vacois-ld.css';
import '../../css/s/sgaevabee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="odggh3bzu"/><path class="qbq4lkoox"/><path class="vacois-ld"/><path class="sgaevabee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:bubble-chat-double-typing-smiley-face-1"} {...others} />);
}

export default Component;
