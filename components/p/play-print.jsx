import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aba8wwbyq.css';
import '../../css/i/iei8ttpxs.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="aba8wwbyq"/><path clip-rule="evenodd" class="iei8ttpxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:play-print"} {...others} />);
}

export default Component;
