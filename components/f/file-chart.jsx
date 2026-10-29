import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oyiiq0ywa.css';
import '../../css/l/liz1nibca.css';
import '../../css/e/evqt8dbmt.css';
import '../../css/i/ix3zvobgf.css';
import '../../css/r/rat30jy_g.css';
import '../../css/z/z5f78wyyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oyiiq0ywa wm-k"/><path class="liz1nibca wm-k"/><path class="evqt8dbmt wm-k"/><path class="ix3zvobgf wm-k"/><path class="rat30jy_g wm-shine"/><path class="wm-a z5f78wyyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:file-chart"} {...others} />);
}

export default Component;
