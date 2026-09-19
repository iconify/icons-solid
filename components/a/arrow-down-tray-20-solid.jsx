import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/npr9dvbkk.css';
import '../../css/v/v8a3xqb9t.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="npr9dvbkk"/><path class="v8a3xqb9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-down-tray-20-solid"} {...others} />);
}

export default Component;
