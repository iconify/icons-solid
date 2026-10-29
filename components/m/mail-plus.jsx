import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7myg9bxy.css';
import '../../css/v/vpjcz_kue.css';
import '../../css/r/r2uyn2biw.css';
import '../../css/q/q7cwnezan.css';
import '../../css/u/uy5ak82sp.css';
import '../../css/i/iegaoredq.css';
import '../../css/d/drmy4tgkd.css';
import '../../css/r/r6xp6ubyl.css';
import '../../css/q/q_qopob4d.css';
import '../../css/v/vi5laeqlh.css';
import '../../css/a/ag-mgdc0d.css';
import '../../css/r/r5oli-s6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t7myg9bxy wm-shadow"/><path class="vpjcz_kue wm-k"/><path class="r2uyn2biw wm-k"/><path class="q7cwnezan wm-k"/><path class="uy5ak82sp wm-k"/><path class="iegaoredq wm-k"/><path class="drmy4tgkd wm-shine"/><path class="r6xp6ubyl wm-a"/><path class="q_qopob4d wm-s"/><path class="vi5laeqlh wm-s"/><path class="ag-mgdc0d wm-s"/><path class="r5oli-s6l wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:mail-plus"} {...others} />);
}

export default Component;
