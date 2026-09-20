import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rmhqtra8a.css';
import '../../css/e/e4naw8x2g.css';
import '../../css/e/e886txqpd.css';
import '../../css/z/zsc2x9xjn.css';
import '../../css/s/sm4-xcb7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rmhqtra8a"/><path class="e4naw8x2g"/><path class="e886txqpd"/><path class="zsc2x9xjn"/><path class="sm4-xcb7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-2-bold-duotone"} {...others} />);
}

export default Component;
