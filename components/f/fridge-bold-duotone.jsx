import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jytcq98on.css';
import '../../css/j/jvurxhwcp.css';
import '../../css/q/qm86erzny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jytcq98on"/><path class="jvurxhwcp"/><path class="qm86erzny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fridge-bold-duotone"} {...others} />);
}

export default Component;
