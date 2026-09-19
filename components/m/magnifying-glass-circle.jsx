import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q95w-kbvl.css';
import '../../css/l/l_pfsmopg.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="q95w-kbvl"/><path clip-rule="evenodd" class="l_pfsmopg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:magnifying-glass-circle"} {...others} />);
}

export default Component;
