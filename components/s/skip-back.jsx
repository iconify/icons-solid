import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ku0i0jqvm.css';
import '../../css/u/u4z3a1bti.css';
import '../../css/b/bep27kbxe.css';
import '../../css/q/qmjfjnl6f.css';
import '../../css/n/nudtjn3ur.css';
import '../../css/f/fibmlrbcu.css';
import '../../css/g/gd_ys0t2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ku0i0jqvm wm-a"/><path class="u4z3a1bti wm-a"/><path class="bep27kbxe wm-a"/><path class="qmjfjnl6f wm-k"/><path class="nudtjn3ur wm-k"/><path class="fibmlrbcu wm-k"/><path class="gd_ys0t2h wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:skip-back"} {...others} />);
}

export default Component;
