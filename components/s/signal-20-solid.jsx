import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tzcabzb6z.css';
import '../../css/x/xyr4bmbqe.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="tzcabzb6z"/><path class="xyr4bmbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:signal-20-solid"} {...others} />);
}

export default Component;
