import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mfsca4s_e.css';
import '../../css/o/ohqhgibnw.css';
import '../../css/z/zzgumwbxx.css';
import '../../css/l/lg39a2exg.css';
import '../../css/o/ok-9qdbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="mfsca4s_e"/><path class="ohqhgibnw wm-shine"/><path class="wm-k zzgumwbxx"/><path class="lg39a2exg wm-s"/><path class="ok-9qdbsi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:smartphone-charging"} {...others} />);
}

export default Component;
