import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_94ucbua.css';
import '../../css/k/kgxjxhb_l.css';
import '../../css/d/dmcf2xb8a.css';
import '../../css/m/mfxvfgb9v.css';
import '../../css/l/l0cesabal.css';
import '../../css/g/ge6_ubxjk.css';
import '../../css/a/anxymfo5g.css';
import '../../css/m/md606zo6g.css';
import '../../css/q/qsvbtlbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j_94ucbua wm-shadow"/><path class="kgxjxhb_l wm-shadow"/><path class="dmcf2xb8a"/><path class="mfxvfgb9v"/><path class="l0cesabal"/><path class="ge6_ubxjk"/><path class="anxymfo5g wm-shine"/><path class="md606zo6g wm-shine"/><path class="qsvbtlbjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:arrow-up-from-line"} {...others} />);
}

export default Component;
