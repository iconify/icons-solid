import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jgpvlibmq.css';
import '../../css/v/v8-g08b2s.css';
import '../../css/e/e0s4or55u.css';
import '../../css/q/qrf0q7bxf.css';
import '../../css/h/hvx9fwbnt.css';
import '../../css/t/tkuq6fb9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jgpvlibmq wm-k"/><path class="v8-g08b2s wm-k"/><path class="e0s4or55u wm-k"/><path class="qrf0q7bxf wm-k"/><path class="hvx9fwbnt wm-a"/><path class="tkuq6fb9m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:history-sketch"} {...others} />);
}

export default Component;
