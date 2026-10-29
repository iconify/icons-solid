import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifukb_9nx.css';
import '../../css/v/vi5_acbvr.css';
import '../../css/b/b_gttebpy.css';
import '../../css/c/c7zyykrlp.css';
import '../../css/l/lvth-xbnq.css';
import '../../css/j/jli1h7_qd.css';
import '../../css/h/hwzlufblz.css';
import '../../css/q/qmaeizhhi.css';
import '../../css/e/e5b0cbb5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ifukb_9nx wm-a"/><path class="vi5_acbvr wm-a"/><path class="b_gttebpy wm-a"/><path class="c7zyykrlp wm-k"/><path class="lvth-xbnq wm-k"/><path class="jli1h7_qd wm-k"/><path class="hwzlufblz wm-shine"/><path class="qmaeizhhi wm-a"/><path class="e5b0cbb5g wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:leaf"} {...others} />);
}

export default Component;
