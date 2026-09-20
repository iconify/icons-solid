import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vixwikbso.css';
import '../../css/c/c12m-i8cv.css';
import '../../css/q/q9pr1ac7t.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vixwikbso"/><path clip-rule="evenodd" class="c12m-i8cv"/><path clip-rule="evenodd" class="q9pr1ac7t"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:next-track-off"} {...others} />);
}

export default Component;
