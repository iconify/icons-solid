import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uqu1o5azq.css';
import '../../css/l/lk25a_b0e.css';
import '../../css/f/fjn-ch3qp.css';
import '../../css/i/izhlt0d2n.css';
import '../../css/x/x113y5b_z.css';
import '../../css/q/qke7mrewj.css';
import '../../css/h/hydrspb9h.css';
import '../../css/w/w4ln40bbq.css';
import '../../css/y/y18w24foe.css';
import '../../css/m/m9l6cmeeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uqu1o5azq wm-shadow"/><path class="lk25a_b0e wm-shadow"/><path class="fjn-ch3qp"/><path class="izhlt0d2n"/><path class="x113y5b_z"/><path class="qke7mrewj"/><path class="hydrspb9h"/><path class="w4ln40bbq wm-shine"/><path class="wm-shine y18w24foe"/><path class="m9l6cmeeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:case-sensitive"} {...others} />);
}

export default Component;
