import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/v/vo0z7tbam.css';
import '../../css/l/ldldnjb2r.css';
import '../../css/e/emi7j0b3k.css';
import '../../css/c/cfhk_wb4s.css';
import '../../css/e/ebi-zsojb.css';
import '../../css/i/izm0f-b1i.css';
import '../../css/r/rzsso4b9e.css';
import '../../css/i/iwsbzlzye.css';
import '../../css/k/kbijwbbjx.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><rect class="vo0z7tbam"/><path class="ldldnjb2r"/><path transform="scale(-1 1)" class="emi7j0b3k"/><path transform="scale(-1)" class="cfhk_wb4s"/><path transform="scale(1 -1)" class="ebi-zsojb"/><path class="izm0f-b1i"/><path class="rzsso4b9e"/><path class="iwsbzlzye"/><path class="kbijwbbjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:copy"} {...others} />);
}

export default Component;
