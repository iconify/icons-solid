import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/ljtayob0g.css';
import '../../css/q/q3ivf5tky.css';
import '../../css/y/yfb696n5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ljtayob0g"/><path class="q3ivf5tky wm-k"/><path class="wm-a yfb696n5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:baguette-sketch"} {...others} />);
}

export default Component;
