import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/y284-ebqk.css';
import '../../css/s/sbq6hlbka.css';
import '../../css/k/keq_k_b_z.css';
import '../../css/m/m49qz1b7l.css';
import '../../css/n/nhzj3ja0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="y284-ebqk"/><path class="sbq6hlbka"/><path class="keq_k_b_z"/><path class="m49qz1b7l"/><path class="nhzj3ja0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:git-merge"} {...others} />);
}

export default Component;
