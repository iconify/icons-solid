import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gste0ub5p.css';
import '../../css/k/k_niurb7w.css';
import '../../css/p/pb_wnibuo.css';
import '../../css/o/op-4vjb9l.css';
import '../../css/x/x_d3wibiv.css';
import '../../css/o/ou3avibiz.css';
import '../../css/g/ggi67zj4c.css';
import '../../css/o/o9cujwkpk.css';
import '../../css/m/mktq-0b9f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gste0ub5p"/><path class="k_niurb7w"/><path class="pb_wnibuo"/><path class="op-4vjb9l"/><path class="x_d3wibiv"/><path class="ou3avibiz"/><path class="ggi67zj4c"/><path class="o9cujwkpk"/><path class="mktq-0b9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pout"} {...others} />);
}

export default Component;
