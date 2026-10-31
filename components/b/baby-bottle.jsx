import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n284bm2ma.css';
import '../../css/b/b3snpszjg.css';
import '../../css/y/yvf_65bxf.css';
import '../../css/i/imec2uboy.css';
import '../../css/v/vndec01ue.css';
import '../../css/c/c69gevchr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="n284bm2ma wm-shadow"/><path class="b3snpszjg"/><path class="yvf_65bxf"/><path class="imec2uboy"/><path class="vndec01ue"/><path class="c69gevchr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:baby-bottle"} {...others} />);
}

export default Component;
