import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/x1o1x_miz.css';
import '../../css/c/ck7zm6con.css';
import '../../css/c/c2ninuc0q.css';
import '../../css/d/d2r1ug28s.css';
import '../../css/b/b7deq0pwj.css';
import '../../css/i/ioizzabai.css';
import '../../css/x/x02tdb3kf.css';
import '../../css/s/ss390hbyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="x1o1x_miz"/><path class="ck7zm6con"/><path class="c2ninuc0q"/><path class="d2r1ug28s"/><path class="b7deq0pwj"/><path class="ioizzabai"/><path class="x02tdb3kf"/><path class="ss390hbyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:magnet"} {...others} />);
}

export default Component;
