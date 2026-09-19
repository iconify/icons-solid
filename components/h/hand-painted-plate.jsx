import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbr7_vb5d.css';
import '../../css/l/lqfofwfty.css';
import '../../css/m/m2bi15b-s.css';
import '../../css/i/ii67q_bfr.css';
import '../../css/k/kfod8ac1j.css';
import '../../css/g/gqcffo6_p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="nbr7_vb5d"/><path class="lqfofwfty"/><path class="m2bi15b-s"/><path class="ii67q_bfr"/><rect class="kfod8ac1j"/><rect class="gqcffo6_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hand-painted-plate"} {...others} />);
}

export default Component;
