import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fix9ebc5t.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/th4j2yb1q.css';
import '../../css/c/cyk-_qf_o.css';
import '../../css/s/sk-gc6smq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fix9ebc5t secondary"/><g class="dt0cm9dhy primary"><path class="th4j2yb1q"/><path class="cyk-_qf_o"/><path class="sk-gc6smq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:book-open-text-duo"} {...others} />);
}

export default Component;
