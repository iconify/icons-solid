import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqwztrbou.css';
import '../../css/s/sh1k6zb2q.css';
import '../../css/p/pc7mq_i4b.css';
import '../../css/e/ejv5f_b2g.css';
import '../../css/g/gwoq6gb2k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="lqwztrbou"/><path class="sh1k6zb2q"/><path class="pc7mq_i4b"/><path class="ejv5f_b2g"/><path class="gwoq6gb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:giraffe"} {...others} />);
}

export default Component;
