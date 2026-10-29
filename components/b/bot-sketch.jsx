import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n032jcw_n.css';
import '../../css/i/i-ko7r1rt.css';
import '../../css/f/f3qmz0s7a.css';
import '../../css/a/aomk_sbrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n032jcw_n"/><path class="i-ko7r1rt wm-a"/><path class="f3qmz0s7a wm-k"/><path class="aomk_sbrv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bot-sketch"} {...others} />);
}

export default Component;
