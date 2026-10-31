import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w_xh4i3qx.css';
import '../../css/n/nu-lmlveh.css';
import '../../css/o/ogx9a5bgr.css';
import '../../css/u/ub_umz1pi.css';
import '../../css/x/x57et2ffv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="w_xh4i3qx wm-shadow"/><path class="nu-lmlveh"/><path class="ogx9a5bgr"/><path class="ub_umz1pi"/><path class="x57et2ffv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:tree-deciduous"} {...others} />);
}

export default Component;
