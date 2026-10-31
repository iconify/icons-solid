import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/x/xz6m7db3m.css';
import '../../css/i/idqnadczu.css';
import '../../css/r/rknwt2bpl.css';
import '../../css/k/k4ef5cbtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="xz6m7db3m"/><path class="idqnadczu"/><path class="rknwt2bpl"/><path class="k4ef5cbtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:football"} {...others} />);
}

export default Component;
