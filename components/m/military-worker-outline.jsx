import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kjqa6lb9m.css';
import '../../css/s/ssyat5bwx.css';
import '../../css/q/q07wm2a9k.css';
import '../../css/j/j2lbl5b5q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="kjqa6lb9m"/><path clip-rule="evenodd" class="ssyat5bwx"/><path class="q07wm2a9k"/><path clip-rule="evenodd" class="j2lbl5b5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:military-worker-outline"} {...others} />);
}

export default Component;
