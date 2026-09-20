import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dc_kbr8xr.css';
import '../../css/v/v3bilzbwu.css';
import '../../css/q/qecunebco.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dc_kbr8xr"/><path clip-rule="evenodd" class="v3bilzbwu"/><path clip-rule="evenodd" class="qecunebco"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:raise-hand-off"} {...others} />);
}

export default Component;
