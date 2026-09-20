import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swc_1mb6l.css';
import '../../css/r/rl5mjqb0q.css';
import '../../css/w/wj4451b7c.css';
import '../../css/m/mvikp6bax.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/m/mdh23vb_h.css';
import '../../css/q/qlw09-b_l.css';
import '../../css/y/ytmonixek.css';
import '../../css/l/luqanr3ja.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="swc_1mb6l"/><path class="rl5mjqb0q"/><path class="wj4451b7c"/><path class="mvikp6bax"/><g class="brzn_0bpr"><path class="mdh23vb_h"/><path class="qlw09-b_l"/><path class="ytmonixek"/><path class="luqanr3ja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:open-mailbox-with-lowered-flag"} {...others} />);
}

export default Component;
