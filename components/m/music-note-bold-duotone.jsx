import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dkdkhr53o.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/t-oeigerl.css';
import '../../css/k/khxz2ebum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dkdkhr53o"/><g class="mc2zb0bvp"><path class="t-oeigerl"/><path class="khxz2ebum"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-bold-duotone"} {...others} />);
}

export default Component;
