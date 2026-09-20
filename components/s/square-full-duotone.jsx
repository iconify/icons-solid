import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jz28tybvv.css';
import '../../css/h/h18f6wuge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jz28tybvv"/><path class="h18f6wuge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-full-duotone"} {...others} />);
}

export default Component;
