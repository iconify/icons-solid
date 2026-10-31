import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_ufmu-mj.css';
import '../../css/l/l3bfrlb2w.css';
import '../../css/o/ow5noumxg.css';
import '../../css/p/prewreqdq.css';
import '../../css/q/qp_2m_b3t.css';
import '../../css/o/osauaubja.css';
import '../../css/v/vjxf3dulj.css';
import '../../css/w/wjhtpubmj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c_ufmu-mj wm-k"/><path class="l3bfrlb2w wm-deco"/><path class="ow5noumxg wm-k"/><path class="prewreqdq wm-k"/><path class="qp_2m_b3t wm-shadow"/><path class="osauaubja wm-shine"/><path class="vjxf3dulj wm-shine"/><path class="wjhtpubmj wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:bookmark-check"} {...others} />);
}

export default Component;
