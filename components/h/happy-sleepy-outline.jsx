import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ghdbiy5at.css';
import '../../css/r/r16iwvw8p.css';
import '../../css/i/i8yxkt2vg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ghdbiy5at"/><path clip-rule="evenodd" class="r16iwvw8p"/><path class="i8yxkt2vg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:happy-sleepy-outline"} {...others} />);
}

export default Component;
