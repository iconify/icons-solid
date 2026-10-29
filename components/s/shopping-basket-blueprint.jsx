import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y4c4vzbsv.css';
import '../../css/q/qoohwwbig.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/u/ug-g1ubih.css';
import '../../css/s/sl8n1s6xr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco y4c4vzbsv"/><path class="qoohwwbig wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="ug-g1ubih wm-k"/><path class="sl8n1s6xr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shopping-basket-blueprint"} {...others} />);
}

export default Component;
