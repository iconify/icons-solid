import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpbhwlb1y.css';
import '../../css/o/oga4iebgx.css';
import '../../css/l/lmzvjipfk.css';
import '../../css/q/q7cwnezan.css';
import '../../css/u/uy5ak82sp.css';
import '../../css/i/iegaoredq.css';
import '../../css/d/drmy4tgkd.css';
import '../../css/r/r6xp6ubyl.css';
import '../../css/o/ote6d2_rw.css';
import '../../css/e/emny7lbtz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bpbhwlb1y wm-shadow"/><path class="oga4iebgx wm-k"/><path class="lmzvjipfk wm-k"/><path class="q7cwnezan wm-k"/><path class="uy5ak82sp wm-k"/><path class="iegaoredq wm-k"/><path class="drmy4tgkd wm-shine"/><path class="r6xp6ubyl wm-a"/><path class="ote6d2_rw wm-s"/><path class="emny7lbtz wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:mail-warning"} {...others} />);
}

export default Component;
