import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/topvl6__i.css';
import '../../css/i/iskl3g_ta.css';
import '../../css/r/ri-2wptou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="topvl6__i"/><path class="iskl3g_ta"/><path class="ri-2wptou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house"} {...others} />);
}

export default Component;
