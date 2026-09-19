import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g0ppmrbfd.css';
import '../../css/u/u234q1bua.css';
import '../../css/m/miaafxb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g0ppmrbfd"/><path class="u234q1bua"/><path class="miaafxb_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:vision"} {...others} />);
}

export default Component;
