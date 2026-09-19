import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x9sf77fyb.css';
import '../../css/q/qvot2mrvj.css';
import '../../css/j/j3p9j4bpq.css';
import '../../css/p/pp_l7cbvh.css';
import '../../css/i/iuzng-3_d.css';
import '../../css/h/htflv6b1g.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="x9sf77fyb"/><path class="qvot2mrvj"/><path class="j3p9j4bpq"/><path class="pp_l7cbvh"/><path class="iuzng-3_d"/><path class="htflv6b1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ss"} {...others} />);
}

export default Component;
