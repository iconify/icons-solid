import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/s/s-c63o7vk.css';
import '../../css/v/vuh9j7bmj.css';
import '../../css/l/l6zx7bbpl.css';
import '../../css/s/sklbftbkc.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><path class="s-c63o7vk"/><path class="vuh9j7bmj"/><path class="l6zx7bbpl"/><path class="sklbftbkc"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:letter-open-circle"} {...others} />);
}

export default Component;
