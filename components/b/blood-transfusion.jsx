import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfq7wwb2q.css';
import '../../css/d/dx43-lbaj.css';
import '../../css/d/d4i09hb1t.css';
import '../../css/r/r_p_ntwja.css';
import '../../css/j/j2qjiubyi.css';
import '../../css/t/to5_hpm1w.css';
import '../../css/o/ov5m800se.css';
import '../../css/y/yxqfs3b-z.css';
import '../../css/i/i60ezabhb.css';
import '../../css/c/c2l906ozf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jfq7wwb2q"/><path class="dx43-lbaj"/><path class="d4i09hb1t"/><path class="r_p_ntwja"/><path class="j2qjiubyi"/><g class="to5_hpm1w"><path class="ov5m800se"/><path class="yxqfs3b-z"/><path class="i60ezabhb"/><path class="c2l906ozf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:blood-transfusion"} {...others} />);
}

export default Component;
