import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0gr6kbmk.css';
import '../../css/l/lsot8vkjb.css';
import '../../css/k/kvmdo0b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="o0gr6kbmk"/><path class="lsot8vkjb"/><path class="kvmdo0b0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:scroll-horizontal"} {...others} />);
}

export default Component;
