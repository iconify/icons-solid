import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qb-x9ac9v.css';
import '../../css/x/xm22t7bqd.css';
import '../../css/t/t3crnbsky.css';
import '../../css/y/yg0ft56ne.css';
import '../../css/i/ib3nl9b-x.css';
import '../../css/j/jl1l3cldz.css';
import '../../css/c/csd02th0h.css';
import '../../css/f/fk98bnb0b.css';
import '../../css/r/rl9r_6boe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qb-x9ac9v"/><path class="xm22t7bqd"/><path class="t3crnbsky"/><path class="yg0ft56ne"/><path class="ib3nl9b-x"/><path class="jl1l3cldz"/><path class="csd02th0h"/><path class="fk98bnb0b"/><path class="rl9r_6boe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:camera-tripod"} {...others} />);
}

export default Component;
