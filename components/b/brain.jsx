import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rufw8g92g.css';
import '../../css/k/kiisrxjzg.css';
import '../../css/z/z786-lb_a.css';
import '../../css/u/u0rcsj7uo.css';
import '../../css/e/eonvsfbbv.css';
import '../../css/v/v7y0ntben.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rufw8g92g wm-shadow"/><path class="kiisrxjzg"/><path class="z786-lb_a"/><path class="u0rcsj7uo"/><path class="eonvsfbbv"/><path class="v7y0ntben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:brain"} {...others} />);
}

export default Component;
