import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h-9ztu5en.css';
import '../../css/p/p8mddu_av.css';
import '../../css/o/og2g1wbux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="h-9ztu5en"/><path class="p8mddu_av"/><path class="og2g1wbux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:bubble-chat-typing-2"} {...others} />);
}

export default Component;
