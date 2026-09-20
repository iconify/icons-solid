import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjc1yrwkr.css';
import '../../css/c/c3z_45b8m.css';
import '../../css/d/d0y6_cbgl.css';
import '../../css/q/qjtzoyv6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yjc1yrwkr"/><path class="c3z_45b8m"/><path class="d0y6_cbgl"/><path class="qjtzoyv6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:camera-night"} {...others} />);
}

export default Component;
