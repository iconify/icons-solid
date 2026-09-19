import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i56ns5bes.css';
import '../../css/o/ol-ghh4bp.css';
import '../../css/j/j2f-64b_n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="i56ns5bes"/><path clip-rule="evenodd" class="ol-ghh4bp"/><path class="j2f-64b_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:asthma-outline"} {...others} />);
}

export default Component;
