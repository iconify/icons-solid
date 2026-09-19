import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u9c46s4em.css';
import '../../css/d/dqrzf1bnz.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="u9c46s4em"/><path class="dqrzf1bnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:minus-print"} {...others} />);
}

export default Component;
