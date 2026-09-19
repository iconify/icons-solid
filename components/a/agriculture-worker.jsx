import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dr-lmjbud.css';
import '../../css/l/lsl7qwgdg.css';
import '../../css/g/gzr2x4p5b.css';
import '../../css/w/w1nca4blz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="dr-lmjbud"/><path class="lsl7qwgdg"/><path clip-rule="evenodd" class="gzr2x4p5b"/><path class="w1nca4blz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:agriculture-worker"} {...others} />);
}

export default Component;
