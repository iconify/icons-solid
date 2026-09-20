import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3zcb7bmk.css';
import '../../css/j/jnl18abrk.css';
import '../../css/e/ej7kdi06a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r3zcb7bmk"/><path class="jnl18abrk"/><path clip-rule="evenodd" class="ej7kdi06a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-warning-outline"} {...others} />);
}

export default Component;
