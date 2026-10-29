import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vbedhib0q.css';
import '../../css/e/ep3o2ubpc.css';
import '../../css/x/xy3kxv0cu.css';
import '../../css/v/vlroo4bwv.css';
import '../../css/k/kjftorklk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vbedhib0q wm-k"/><path class="ep3o2ubpc wm-a"/><path class="wm-shadow xy3kxv0cu"/><path class="vlroo4bwv wm-k"/><path class="kjftorklk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fuel-engrave"} {...others} />);
}

export default Component;
