import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swc_1mb6l.css';
import '../../css/r/rl5mjqb0q.css';
import '../../css/d/d1qg8abmz.css';
import '../../css/o/o-chxtbqo.css';
import '../../css/m/mvikp6bax.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/b/bz59g043b.css';
import '../../css/w/wthydmb9f.css';
import '../../css/y/ytmonixek.css';
import '../../css/x/x2fe6acpa.css';
import '../../css/g/go8jr9x7b.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="swc_1mb6l"/><path class="rl5mjqb0q"/><path class="d1qg8abmz"/><rect class="o-chxtbqo"/><path class="mvikp6bax"/><g class="brzn_0bpr"><path class="bz59g043b"/><path class="wthydmb9f"/><path class="ytmonixek"/><path class="x2fe6acpa"/><path class="go8jr9x7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:open-mailbox-with-raised-flag"} {...others} />);
}

export default Component;
