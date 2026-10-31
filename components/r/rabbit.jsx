import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-atl5bsv.css';
import '../../css/n/na375epjp.css';
import '../../css/f/f9id7_z7y.css';
import '../../css/p/pt9nj2bvg.css';
import '../../css/e/ezfh3-btn.css';
import '../../css/l/lletq_buh.css';
import '../../css/h/hfuziib8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v-atl5bsv wm-k"/><path class="na375epjp wm-deco"/><path class="f9id7_z7y wm-k"/><path class="pt9nj2bvg wm-k"/><path class="ezfh3-btn wm-shadow"/><path class="lletq_buh wm-shine"/><path class="hfuziib8h wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:rabbit"} {...others} />);
}

export default Component;
