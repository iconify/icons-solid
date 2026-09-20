import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kwlqebc6h.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/jejndwbfp.css';
import '../../css/x/xpb82nibn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kwlqebc6h"/><g class="mc2zb0bvp"><path class="jejndwbfp"/><path class="xpb82nibn"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-vertical-bold-duotone"} {...others} />);
}

export default Component;
