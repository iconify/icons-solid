import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mw2j0bfon.css';
import '../../css/c/crk1mub_d.css';
import '../../css/s/shkc45brf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mw2j0bfon"/><path class="crk1mub_d"/><path clip-rule="evenodd" class="shkc45brf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-bold-duotone"} {...others} />);
}

export default Component;
