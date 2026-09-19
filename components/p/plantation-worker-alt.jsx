import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/svhmzzwpg.css';
import '../../css/a/az0f5oiia.css';
import '../../css/r/rhiflirgq.css';
import '../../css/l/ljkj8kesp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="svhmzzwpg"/><path clip-rule="evenodd" class="az0f5oiia"/><path class="rhiflirgq"/><path class="ljkj8kesp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:plantation-worker-alt"} {...others} />);
}

export default Component;
