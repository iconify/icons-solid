import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2efxzbdp.css';
import '../../css/h/hm5eixlye.css';
import '../../css/h/hgp61kd_e.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="f2efxzbdp"/><path clip-rule="evenodd" class="hm5eixlye"/><path class="hgp61kd_e"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:duplicate-off"} {...others} />);
}

export default Component;
