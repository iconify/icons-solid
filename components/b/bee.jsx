import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ymi3ltbwu.css';
import '../../css/j/jaup11bov.css';
import '../../css/l/lx3mrzbpn.css';
import '../../css/y/yfyne3ixv.css';
import '../../css/u/u8v1tfbvx.css';
import '../../css/y/yvkzbhbbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow ymi3ltbwu"/><path class="jaup11bov"/><path class="lx3mrzbpn"/><path class="yfyne3ixv"/><path class="u8v1tfbvx"/><path class="yvkzbhbbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bee"} {...others} />);
}

export default Component;
