import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p6vy9kb5f.css';
import '../../css/f/feovcib_o.css';
import '../../css/z/z0temacgj.css';
import '../../css/k/kwzkbjbps.css';
import '../../css/z/zs295v-ni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="p6vy9kb5f wm-deco"/><path class="feovcib_o wm-deco"/><path class="wm-deco z0temacgj"/><path class="kwzkbjbps wm-k"/><path class="wm-a zs295v-ni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sun-blueprint"} {...others} />);
}

export default Component;
