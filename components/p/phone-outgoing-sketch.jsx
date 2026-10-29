import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w328ithck.css';
import '../../css/d/dqwndkx9y.css';
import '../../css/q/ql7xkx99v.css';
import '../../css/l/lwpbxcrve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w328ithck"/><path class="dqwndkx9y wm-s"/><path class="ql7xkx99v wm-k"/><path class="lwpbxcrve wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-outgoing-sketch"} {...others} />);
}

export default Component;
