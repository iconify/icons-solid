import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/p/pjt6iib9p.css';
import '../../css/x/xegq_cv7z.css';
import '../../css/g/g5bpspbou.css';
import '../../css/z/z5l2epbmx.css';
import '../../css/d/dfttexb4j.css';
import '../../css/l/lafx8xgcd.css';
import '../../css/v/v_cbr1gwt.css';
import '../../css/f/fz8i4x6kd.css';
import '../../css/h/htoa3bqep.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="pjt6iib9p"/><path class="xegq_cv7z"/><path class="g5bpspbou"/><path class="z5l2epbmx"/><path class="dfttexb4j"/><path class="lafx8xgcd"/><path class="v_cbr1gwt"/><path class="fz8i4x6kd"/><circle class="htoa3bqep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:portrait2"} {...others} />);
}

export default Component;
