import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p281ozb3g.css';
import '../../css/u/u6gm10bfx.css';
import '../../css/i/i21t0ez6r.css';
import '../../css/m/mrsh1dbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="p281ozb3g"/><path class="u6gm10bfx"/><path class="i21t0ez6r"/><path class="mrsh1dbjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-5-bold-duotone"} {...others} />);
}

export default Component;
