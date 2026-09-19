import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzd8z06mk.css';
import '../../css/r/r_m369bhl.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><path class="bzd8z06mk"/><path clip-rule="evenodd" class="r_m369bhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:terminal-compact"} {...others} />);
}

export default Component;
