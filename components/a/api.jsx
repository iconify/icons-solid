import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n_qx3vb4d.css';
import '../../css/k/k09k0kl2z.css';
import '../../css/f/f_xp8vzas.css';
import '../../css/j/jzbi23d3t.css';
import '../../css/u/uvlti2bsh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="n_qx3vb4d wm-shadow"/><path class="k09k0kl2z"/><path class="f_xp8vzas"/><path class="jzbi23d3t"/><path class="uvlti2bsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:api"} {...others} />);
}

export default Component;
