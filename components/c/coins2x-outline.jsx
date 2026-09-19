import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jt50z3bql.css';
import '../../css/i/ij34_2wnx.css';
import '../../css/m/mgfuygb4n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="jt50z3bql"/><path clip-rule="evenodd" class="ij34_2wnx"/><path clip-rule="evenodd" class="mgfuygb4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:coins2x-outline"} {...others} />);
}

export default Component;
