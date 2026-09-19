import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/movc4nh8l.css';
import '../../css/m/my00-3ele.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="movc4nh8l"/><path class="my00-3ele"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:rss"} {...others} />);
}

export default Component;
