import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zhjgrfb8h.css';
import '../../css/j/jqhmlbw-b.css';
import '../../css/r/rkqar1bkx.css';
import '../../css/x/xq348xb7q.css';
import '../../css/j/jpeittfov.css';
import '../../css/c/cqbrolbqp.css';
import '../../css/l/loqts3cyf.css';
import '../../css/c/cnpycbcbm.css';
import '../../css/n/nncl9wblp.css';
import '../../css/w/wfps3fb5x.css';
import '../../css/o/ose5dxv0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k zhjgrfb8h"/><path class="jqhmlbw-b wm-a"/><path class="rkqar1bkx wm-k"/><path class="wm-k xq348xb7q"/><path class="jpeittfov wm-k"/><path class="cqbrolbqp wm-k"/><path class="loqts3cyf wm-a"/><path class="cnpycbcbm wm-shadow"/><path class="nncl9wblp wm-shine"/><path class="wfps3fb5x wm-shine"/><path class="ose5dxv0h wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:calendar-x"} {...others} />);
}

export default Component;
