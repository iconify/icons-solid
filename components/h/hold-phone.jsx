import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xnkn0ubcl.css';
import '../../css/k/k315r8bxr.css';
import '../../css/c/cpb1ribrk.css';
import '../../css/v/v-zfuob0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="xnkn0ubcl"/><path class="k315r8bxr"/><path class="cpb1ribrk"/><path class="v-zfuob0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hold-phone"} {...others} />);
}

export default Component;
