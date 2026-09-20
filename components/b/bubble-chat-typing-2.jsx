import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5a5yrzvq.css';
import '../../css/j/jutld8uev.css';
import '../../css/i/inth4znzd.css';
import '../../css/c/ccyeiab0a.css';
import '../../css/v/vo4idybtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t5a5yrzvq"/><path class="jutld8uev"/><path class="inth4znzd"/><path class="ccyeiab0a"/><path class="vo4idybtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bubble-chat-typing-2"} {...others} />);
}

export default Component;
