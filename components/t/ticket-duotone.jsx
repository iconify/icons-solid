import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q-co8vbgs.css';
import '../../css/p/pwd4r5zie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="q-co8vbgs"/><path class="pwd4r5zie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:ticket-duotone"} {...others} />);
}

export default Component;
