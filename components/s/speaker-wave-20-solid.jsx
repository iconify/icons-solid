import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esng_0bal.css';
import '../../css/c/cgqzrdglk.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="esng_0bal"/><path class="cgqzrdglk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:speaker-wave-20-solid"} {...others} />);
}

export default Component;
