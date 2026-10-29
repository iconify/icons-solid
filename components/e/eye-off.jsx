import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ndu0khbqt.css';
import '../../css/r/rmpoojzik.css';
import '../../css/y/y-nt4wb7w.css';
import '../../css/s/s5zakmm4k.css';
import '../../css/k/k804s1vze.css';
import '../../css/a/aq7uexilb.css';
import '../../css/q/ql34y_igo.css';
import '../../css/l/lr2jvztmg.css';
import '../../css/c/cnby9gb4a.css';
import '../../css/l/loqcsotns.css';
import '../../css/c/clgkixbex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ndu0khbqt wm-k"/><path class="rmpoojzik wm-k"/><path class="wm-k y-nt4wb7w"/><path class="s5zakmm4k wm-a"/><path class="k804s1vze wm-a"/><path class="aq7uexilb wm-a"/><path class="ql34y_igo wm-a"/><path class="lr2jvztmg wm-k"/><path class="cnby9gb4a wm-s"/><path class="loqcsotns wm-s"/><path class="clgkixbex wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:eye-off"} {...others} />);
}

export default Component;
