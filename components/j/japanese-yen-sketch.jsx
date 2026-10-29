import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f810mgb8e.css';
import '../../css/q/q_de4kb_g.css';
import '../../css/g/gwtyysm7e.css';
import '../../css/a/aahfikpfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f810mgb8e wm-k"/><path class="q_de4kb_g wm-a"/><path class="gwtyysm7e wm-k"/><path class="aahfikpfy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:japanese-yen-sketch"} {...others} />);
}

export default Component;
