import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qpwywubbd.css';
import '../../css/t/tq5kzkb5k.css';
import '../../css/k/kvpbtyr-u.css';
import '../../css/c/cyx3_-b-k.css';
import '../../css/t/tegvkdb3f.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qpwywubbd"/><path clip-rule="evenodd" class="tq5kzkb5k"/><path clip-rule="evenodd" class="kvpbtyr-u"/><path class="cyx3_-b-k"/><path class="tegvkdb3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:identification-print"} {...others} />);
}

export default Component;
