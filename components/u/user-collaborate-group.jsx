import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uel6vy0_y.css';
import '../../css/f/f3zrb5w1g.css';
import '../../css/u/ufb3wzbxw.css';
import '../../css/f/f4zjd6bec.css';
import '../../css/y/ye2pw-bhw.css';
import '../../css/c/c2l7t5bkf.css';
import '../../css/k/k-n0i1b_k.css';
import '../../css/m/m3rugactp.css';
import '../../css/p/p-csv8bze.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="uel6vy0_y"/><path class="f3zrb5w1g"/><path class="ufb3wzbxw"/><path class="f4zjd6bec"/><path class="ye2pw-bhw"/><path class="c2l7t5bkf"/><path class="k-n0i1b_k"/><path class="m3rugactp"/><path class="p-csv8bze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:user-collaborate-group"} {...others} />);
}

export default Component;
