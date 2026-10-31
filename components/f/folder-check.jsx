import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lnu1retzh.css';
import '../../css/u/u6cgesbsb.css';
import '../../css/j/jwxkt_b3c.css';
import '../../css/m/mx42m7b5w.css';
import '../../css/a/ah6p5359o.css';
import '../../css/b/bclmflz0s.css';
import '../../css/p/p4z3j6bmt.css';
import '../../css/d/d6ed8ebnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lnu1retzh wm-k"/><path class="u6cgesbsb wm-deco"/><path class="jwxkt_b3c wm-k"/><path class="mx42m7b5w wm-k"/><path class="ah6p5359o wm-shadow"/><path class="bclmflz0s wm-shine"/><path class="p4z3j6bmt wm-shine"/><path class="d6ed8ebnx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:folder-check"} {...others} />);
}

export default Component;
