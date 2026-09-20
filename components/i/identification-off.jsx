import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xedjwxbpm.css';
import '../../css/c/c3j04fb6w.css';
import '../../css/z/zgj-9nbrm.css';
import '../../css/g/g3vy2_9sr.css';
import '../../css/c/c9dqp6mgk.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xedjwxbpm"/><path clip-rule="evenodd" class="c3j04fb6w"/><path clip-rule="evenodd" class="zgj-9nbrm"/><path class="g3vy2_9sr"/><path class="c9dqp6mgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:identification-off"} {...others} />);
}

export default Component;
