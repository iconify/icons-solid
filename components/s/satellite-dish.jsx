import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bt7187b8m.css';
import '../../css/p/p7wo1ibmu.css';
import '../../css/k/kro82vbrq.css';
import '../../css/g/g6o8xobrr.css';
import '../../css/v/vjc0jibin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bt7187b8m"/><path class="p7wo1ibmu wm-k"/><path class="kro82vbrq wm-a"/><path class="g6o8xobrr wm-s"/><path class="vjc0jibin wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:satellite-dish"} {...others} />);
}

export default Component;
