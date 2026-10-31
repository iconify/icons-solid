import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/g/gaaka951g.css';
import '../../css/u/ubhwy-9lp.css';
import '../../css/y/y37m4mbaa.css';
import '../../css/r/r6qgx8bse.css';
import '../../css/z/z2fguqbps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="gaaka951g"/><path class="ubhwy-9lp"/><path class="y37m4mbaa"/><path class="r6qgx8bse"/><path class="z2fguqbps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:aperture"} {...others} />);
}

export default Component;
