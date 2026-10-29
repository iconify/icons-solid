import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yg3v7wiil.css';
import '../../css/g/gjeak8b_r.css';
import '../../css/p/pikw12bjy.css';
import '../../css/l/laik-sb4y.css';
import '../../css/q/q384jqbjj.css';
import '../../css/i/iy8fyfvrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco yg3v7wiil"/><path class="gjeak8b_r wm-deco"/><path class="pikw12bjy wm-deco"/><path class="laik-sb4y wm-k"/><path class="q384jqbjj wm-a"/><path class="iy8fyfvrp wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gold-ingot-blueprint"} {...others} />);
}

export default Component;
