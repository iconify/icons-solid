import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w5wcaxskk.css';
import '../../css/x/xlcd5qbeq.css';
import '../../css/d/d-tr2fb7r.css';
import '../../css/i/ii_20en4n.css';
import '../../css/j/jv10pq-vg.css';
import '../../css/a/ankdckbvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w5wcaxskk wm-k"/><path class="wm-a xlcd5qbeq"/><path class="d-tr2fb7r wm-s"/><path class="ii_20en4n wm-k"/><path class="jv10pq-vg wm-a"/><path class="ankdckbvk wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mosque-sketch"} {...others} />);
}

export default Component;
