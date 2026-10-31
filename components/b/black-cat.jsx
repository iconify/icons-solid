import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/frqvhkbha.css';
import '../../css/h/h1r7qx2rk.css';
import '../../css/h/h48vv8brj.css';
import '../../css/w/w27peibbj.css';
import '../../css/v/vtv5mlorn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="frqvhkbha"/><path class="h1r7qx2rk wm-shine"/><path class="h48vv8brj wm-k"/><path class="w27peibbj wm-a"/><path class="vtv5mlorn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:black-cat"} {...others} />);
}

export default Component;
