import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fdnvodbnu.css';
import '../../css/w/w9enl3svg.css';
import '../../css/q/qv0f9kbrn.css';
import '../../css/q/qov-y5bnk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="fdnvodbnu"/><path class="w9enl3svg"/><path class="qv0f9kbrn"/><path class="qov-y5bnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:message-emoji"} {...others} />);
}

export default Component;
