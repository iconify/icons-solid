import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vcwnokb_q.css';
import '../../css/l/ll8yvqbbm.css';
import '../../css/f/fl0xqlm0u.css';
import '../../css/b/bhvl96d3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vcwnokb_q"/><path clip-rule="evenodd" class="ll8yvqbbm"/><path class="fl0xqlm0u"/><path class="bhvl96d3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:speech-to-video"} {...others} />);
}

export default Component;
