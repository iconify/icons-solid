import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jga9qxb4j.css';
import '../../css/o/o0wadjbxs.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="jga9qxb4j"/><path class="o0wadjbxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:inbox-arrow-down-20-solid"} {...others} />);
}

export default Component;
