import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_v0vbbuk.css';
import '../../css/v/vj9u41bvz.css';
import '../../css/m/mz1b8wy8c.css';
import '../../css/v/vx8e_p7ev.css';
import '../../css/t/t_zhcm8_m.css';
import '../../css/c/cz1cb1bni.css';
import '../../css/b/bpjksdbes.css';
import '../../css/w/wpme-du2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s_v0vbbuk wm-k"/><path class="vj9u41bvz wm-deco"/><path class="mz1b8wy8c wm-k"/><path class="vx8e_p7ev wm-k"/><path class="t_zhcm8_m wm-shadow"/><path class="cz1cb1bni wm-shine"/><path class="bpjksdbes wm-shine"/><path class="wm-shine wpme-du2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:message-square-plus"} {...others} />);
}

export default Component;
