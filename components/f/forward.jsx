import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fx6xp2d2s.css';
import '../../css/m/mo-3tff5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fx6xp2d2s"/><path class="mo-3tff5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:forward"} {...others} />);
}

export default Component;
