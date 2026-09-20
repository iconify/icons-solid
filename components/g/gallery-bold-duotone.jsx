import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c0tsxrhtd.css';
import '../../css/u/uafzi8bgb.css';
import '../../css/q/q5hny5blk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c0tsxrhtd"/><path clip-rule="evenodd" class="uafzi8bgb"/><path class="q5hny5blk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-bold-duotone"} {...others} />);
}

export default Component;
