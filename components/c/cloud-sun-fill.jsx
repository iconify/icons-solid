import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/upzir9bjp.css';
import '../../css/s/shpvkzc0o.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="upzir9bjp"/><path class="shpvkzc0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:cloud-sun-fill"} {...others} />);
}

export default Component;
