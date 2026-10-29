import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/j_b2pwsiw.css';
import '../../css/h/hlv6ql6jp.css';
import '../../css/p/pbtr10c0j.css';
import '../../css/p/puwr3dbsv.css';
import '../../css/v/vqvr78bzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="j_b2pwsiw wm-deco"/><path class="hlv6ql6jp wm-deco"/><path class="pbtr10c0j wm-deco"/><path class="puwr3dbsv wm-k"/><path class="vqvr78bzf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shapes-blueprint"} {...others} />);
}

export default Component;
