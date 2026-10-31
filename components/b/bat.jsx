import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/r/rn8jl7h7f.css';
import '../../css/r/rl5ftlbza.css';
import '../../css/f/ff0nobb5m.css';
import '../../css/y/ys-q8clhk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGYi5t7dle" x1="9" x2="15" y1="5.5" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGYi5t7dle)" class="rn8jl7h7f"/><path class="rl5ftlbza wm-shine"/><path class="ff0nobb5m wm-shine"/><path class="wm-shine ys-q8clhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:bat"} {...others} />);
}

export default Component;
