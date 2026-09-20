import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b_drxzbot.css';
import '../../css/q/q6zrlybpu.css';
import '../../css/k/kzhpbebmd.css';
import '../../css/d/dwgs_gdah.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b_drxzbot"/><path clip-rule="evenodd" class="q6zrlybpu"/><path clip-rule="evenodd" class="kzhpbebmd"/><path clip-rule="evenodd" class="dwgs_gdah"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:sliders-off"} {...others} />);
}

export default Component;
