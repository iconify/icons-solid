import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oyiiq0ywa.css';
import '../../css/l/liz1nibca.css';
import '../../css/e/evqt8dbmt.css';
import '../../css/i/ix3zvobgf.css';
import '../../css/r/rat30jy_g.css';
import '../../css/r/r627jwans.css';
import '../../css/q/qmgm2evmh.css';
import '../../css/m/m53b41beh.css';
import '../../css/d/df6ei_b3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oyiiq0ywa wm-k"/><path class="liz1nibca wm-k"/><path class="evqt8dbmt wm-k"/><path class="ix3zvobgf wm-k"/><path class="rat30jy_g wm-shine"/><path class="r627jwans wm-k"/><path class="qmgm2evmh wm-k"/><path class="m53b41beh wm-k"/><path class="df6ei_b3u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:file-question"} {...others} />);
}

export default Component;
