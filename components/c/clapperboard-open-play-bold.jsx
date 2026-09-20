import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wq0hmuiej.css';
import '../../css/z/znucjgzav.css';
import '../../css/b/bn6w8zb9h.css';
import '../../css/q/qj1hodctu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wq0hmuiej"/><path class="znucjgzav"/><path clip-rule="evenodd" class="bn6w8zb9h"/><path class="qj1hodctu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-open-play-bold"} {...others} />);
}

export default Component;
