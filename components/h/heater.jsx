import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bh-zo_bta.css';
import '../../css/v/vs66lghsv.css';
import '../../css/m/mwbfq23fk.css';
import '../../css/n/n7_x-bbav.css';
import '../../css/w/wf86nh86b.css';
import '../../css/p/pbvnsxbvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bh-zo_bta wm-shadow"/><path class="vs66lghsv wm-shadow"/><path class="mwbfq23fk"/><path class="n7_x-bbav"/><path class="wf86nh86b"/><path class="pbvnsxbvh wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:heater"} {...others} />);
}

export default Component;
