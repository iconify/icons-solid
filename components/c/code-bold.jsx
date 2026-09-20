import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c--ct8_wq.css';
import '../../css/l/lawdo_brr.css';
import '../../css/k/kkl9unbzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c--ct8_wq"/><path class="lawdo_brr"/><path class="kkl9unbzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-bold"} {...others} />);
}

export default Component;
