import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oyiiq0ywa.css';
import '../../css/l/liz1nibca.css';
import '../../css/e/evqt8dbmt.css';
import '../../css/i/ix3zvobgf.css';
import '../../css/r/rat30jy_g.css';
import '../../css/l/ln2dqrb7n.css';
import '../../css/u/u41l7ttcp.css';
import '../../css/k/kuy669b7a.css';
import '../../css/m/mo37fsb9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oyiiq0ywa wm-k"/><path class="liz1nibca wm-k"/><path class="evqt8dbmt wm-k"/><path class="ix3zvobgf wm-k"/><path class="rat30jy_g wm-shine"/><path class="ln2dqrb7n wm-k"/><path class="u41l7ttcp wm-k"/><path class="kuy669b7a wm-k"/><path class="mo37fsb9n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:file-warning"} {...others} />);
}

export default Component;
