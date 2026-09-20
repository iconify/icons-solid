import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msgrqq25w.css';
import '../../css/v/v11r7_b8f.css';
import '../../css/g/ghjiyhm_g.css';
import '../../css/k/kfud3pbhl.css';
import '../../css/s/swf_6-bzp.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/hw3p6f_pr.css';
import '../../css/d/dtpnimjhv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="msgrqq25w"/><path class="v11r7_b8f"/><rect class="ghjiyhm_g"/><rect class="kfud3pbhl"/><path class="swf_6-bzp"/><g class="jn8qy4bru"><path class="hw3p6f_pr"/><path class="dtpnimjhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:temple-of-artemis-at-ephesus"} {...others} />);
}

export default Component;
