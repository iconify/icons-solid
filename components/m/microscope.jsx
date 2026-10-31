import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/l/l_r-r6byb.css';
import '../../css/q/q494y7bdw.css';
import '../../css/j/jj_6ded0z.css';
import '../../css/k/k8c62-bmr.css';
import '../../css/z/zuhdrxf_j.css';
import '../../css/s/s0sgk5bpz.css';
import '../../css/s/s2rso9brt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJQXavtHK" x1="10" x2="14" y1="1.78" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="l_r-r6byb wm-k"/><path class="q494y7bdw wm-a"/><path class="jj_6ded0z wm-deco"/><path fill="url(#SVGJQXavtHK)" class="k8c62-bmr wm-k"/><path class="wm-a zuhdrxf_j"/><path class="s0sgk5bpz wm-shadow"/><path class="s2rso9brt wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:microscope"} {...others} />);
}

export default Component;
