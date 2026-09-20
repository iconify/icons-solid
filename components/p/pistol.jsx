import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1kn_kt2k.css';
import '../../css/v/vivtzcqvh.css';
import '../../css/p/p7a19mbmd.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/komkke12x.css';
import '../../css/y/y8sfjbbfl.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="u1kn_kt2k"/><path class="vivtzcqvh"/><path class="p7a19mbmd"/><g class="ij2x_72vy"><path class="komkke12x"/><path class="y8sfjbbfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pistol"} {...others} />);
}

export default Component;
