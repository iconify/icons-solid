import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b489q0b4y.css';
import '../../css/d/d2x_502uq.css';
import '../../css/w/w5p5w4_bh.css';
import '../../css/r/rl_jl967n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b489q0b4y"/><path class="d2x_502uq"/><path class="w5p5w4_bh"/><path class="rl_jl967n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-plus"} {...others} />);
}

export default Component;
