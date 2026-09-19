import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b3zep_bxk.css';
import '../../css/s/s4iwn3bcn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="b3zep_bxk"/><path clip-rule="evenodd" class="s4iwn3bcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:lab-search"} {...others} />);
}

export default Component;
