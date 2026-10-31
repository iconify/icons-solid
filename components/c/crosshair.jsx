import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k2tmhbc7k.css';
import '../../css/y/y7idnesla.css';
import '../../css/r/rry1ebbww.css';
import '../../css/b/boyaabb0s.css';
import '../../css/p/p6obix_ad.css';
import '../../css/c/cdn0l8bbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k2tmhbc7k wm-shadow"/><path class="y7idnesla"/><path class="rry1ebbww"/><path class="boyaabb0s"/><path class="p6obix_ad"/><path class="cdn0l8bbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:crosshair"} {...others} />);
}

export default Component;
