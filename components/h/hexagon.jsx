import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u-mku9h3o.css';
import '../../css/n/nf8j83c8p.css';
import '../../css/r/rjkhg_e2i.css';
import '../../css/m/m3juav73q.css';
import '../../css/j/j7qiifiqw.css';
import '../../css/w/wjshshb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="u-mku9h3o wm-shadow"/><path class="nf8j83c8p"/><path class="rjkhg_e2i"/><path class="m3juav73q"/><path class="j7qiifiqw"/><path class="wjshshb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:hexagon"} {...others} />);
}

export default Component;
