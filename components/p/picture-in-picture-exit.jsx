import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dj22uqbdf.css';
import '../../css/q/qtuol_b8e.css';
import '../../css/b/by8w4yalm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dj22uqbdf"/><rect transform="rotate(180 13 12)" class="qtuol_b8e"/><path class="by8w4yalm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:picture-in-picture-exit"} {...others} />);
}

export default Component;
