import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tiiyrjvgi.css';
import '../../css/p/pv1rl1bal.css';
import '../../css/a/adqqsio1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tiiyrjvgi"/><path class="pv1rl1bal"/><path class="adqqsio1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:atom-bold-duotone"} {...others} />);
}

export default Component;
