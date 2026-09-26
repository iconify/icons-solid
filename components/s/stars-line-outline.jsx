import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lwfoszbft.css';
import '../../css/x/xlh4q9b7n.css';
import '../../css/x/xsj74acax.css';
import '../../css/f/f6aussbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lwfoszbft"/><path class="xlh4q9b7n"/><path clip-rule="evenodd" class="xsj74acax"/><path clip-rule="evenodd" class="f6aussbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-line-outline"} {...others} />);
}

export default Component;
