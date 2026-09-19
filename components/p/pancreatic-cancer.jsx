import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/di8wmackh.css';
import '../../css/r/r1625-bnw.css';
import '../../css/j/j4wy0zbwb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="di8wmackh"/><path class="r1625-bnw"/><path clip-rule="evenodd" class="j4wy0zbwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pancreatic-cancer"} {...others} />);
}

export default Component;
