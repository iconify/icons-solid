import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nxry4cc6j.css';
import '../../css/p/p1hp9pbhb.css';
import '../../css/k/k1aplpb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nxry4cc6j"/><path class="p1hp9pbhb"/><path class="k1aplpb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-media-incomplete"} {...others} />);
}

export default Component;
