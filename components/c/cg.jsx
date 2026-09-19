import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spo03jb3p.css';
import '../../css/l/lf77ncblg.css';
import '../../css/p/pq4o_cp0f.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="spo03jb3p"/><path class="lf77ncblg"/><path class="pq4o_cp0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cg"} {...others} />);
}

export default Component;
