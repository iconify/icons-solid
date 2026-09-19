import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h8qf3b_7u.css';
import '../../css/l/lyaqavbsk.css';
import '../../css/t/tm8mw0bav.css';
import '../../css/q/qh2kqpq0h.css';
import '../../css/j/jkt38pbrz.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><path class="h8qf3b_7u"/><circle class="lyaqavbsk"/><path class="tm8mw0bav"/><circle class="qh2kqpq0h"/><path class="jkt38pbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:elevator"} {...others} />);
}

export default Component;
