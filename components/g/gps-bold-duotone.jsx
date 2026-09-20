import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v17fuccch.css';
import '../../css/f/fb4bdwb3d.css';
import '../../css/k/kvb400b5w.css';
import '../../css/k/kitorfb4h.css';
import '../../css/t/tu9q2gybi.css';
import '../../css/k/k6x1q5l9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v17fuccch"/><path class="fb4bdwb3d"/><path class="kvb400b5w"/><path class="kitorfb4h"/><path class="tu9q2gybi"/><path class="k6x1q5l9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gps-bold-duotone"} {...others} />);
}

export default Component;
