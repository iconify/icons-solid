import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nbj9h_znk.css';
import '../../css/x/xa7_8hb6p.css';
import '../../css/y/y183ipbpf.css';
import '../../css/v/vjc0jibin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="nbj9h_znk"/><path class="wm-k xa7_8hb6p"/><path class="wm-a y183ipbpf"/><path class="vjc0jibin wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:person-running"} {...others} />);
}

export default Component;
