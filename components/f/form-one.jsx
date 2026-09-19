import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/d/d_bahfbeg.css';
import '../../css/j/jgg_ygb2v.css';
import '../../css/z/z201j4btx.css';
import '../../css/w/w8hu_c39k.css';
import '../../css/d/d8r142b_x.css';
import '../../css/m/m1jcc5vky.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="r8cyu3bwz"/><path class="d_bahfbeg"/><path class="jgg_ygb2v"/><path class="z201j4btx"/><path class="w8hu_c39k"/><path class="d8r142b_x"/><path class="m1jcc5vky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:form-one"} {...others} />);
}

export default Component;
