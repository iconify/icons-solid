import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t7y_x1tmb.css';
import '../../css/m/mro1h2beq.css';
import '../../css/f/fti11ub9z.css';
import '../../css/c/c6mey7b4c.css';
import '../../css/h/hqi-5s0wa.css';
import '../../css/f/fd-g0n8-n.css';
import '../../css/z/zz92jd65t.css';
import '../../css/i/iron2-puw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t7y_x1tmb"/><path class="mro1h2beq"/><path class="fti11ub9z"/><path class="c6mey7b4c"/><path class="hqi-5s0wa"/><path class="fd-g0n8-n"/><path class="zz92jd65t"/><path class="iron2-puw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:certified-diploma"} {...others} />);
}

export default Component;
