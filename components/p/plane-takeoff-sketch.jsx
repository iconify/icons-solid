import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uhbvnmlqs.css';
import '../../css/c/crjbpijjy.css';
import '../../css/e/e_6oe7ajk.css';
import '../../css/r/rvo70qbei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uhbvnmlqs"/><path class="crjbpijjy wm-a"/><path class="e_6oe7ajk wm-k"/><path class="rvo70qbei wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plane-takeoff-sketch"} {...others} />);
}

export default Component;
