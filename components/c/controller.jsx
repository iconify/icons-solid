import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/if8c-p6ab.css';
import '../../css/r/r0mx2p4-s.css';
import '../../css/g/gqfbtia_s.css';
import '../../css/j/j7whtobzs.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="if8c-p6ab"/><path clip-rule="evenodd" class="r0mx2p4-s"/><path class="gqfbtia_s"/><path class="j7whtobzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:controller"} {...others} />);
}

export default Component;
