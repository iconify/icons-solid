import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e2ra9zmqo.css';
import '../../css/r/rbrqs4bqf.css';
import '../../css/f/fedou6bod.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e2ra9zmqo"/><path class="rbrqs4bqf"/><path class="fedou6bod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:routing-3-bold"} {...others} />);
}

export default Component;
