import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uu9ihmb5x.css';
import '../../css/g/gy8yueb9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="uu9ihmb5x"/><path class="gy8yueb9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:house-solid"} {...others} />);
}

export default Component;
