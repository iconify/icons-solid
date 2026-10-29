import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ex2o_-t6b.css';
import '../../css/u/u1azafbba.css';
import '../../css/h/hxppdibgb.css';
import '../../css/o/oapjrnbtk.css';
import '../../css/s/sn3o9xbjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ex2o_-t6b"/><path class="u1azafbba wm-k"/><path class="hxppdibgb wm-a"/><path class="oapjrnbtk wm-k"/><path class="sn3o9xbjr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:newspaper-sketch"} {...others} />);
}

export default Component;
