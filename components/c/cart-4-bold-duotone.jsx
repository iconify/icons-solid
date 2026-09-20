import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i21681b6z.css';
import '../../css/d/d6dberbkk.css';
import '../../css/h/h8pu4qb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i21681b6z"/><path class="d6dberbkk"/><path class="h8pu4qb7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-4-bold-duotone"} {...others} />);
}

export default Component;
