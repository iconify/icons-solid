import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m98iebcmq.css';
import '../../css/u/uy4wp4b0d.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="m98iebcmq"/><path class="uy4wp4b0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:bookmarks"} {...others} />);
}

export default Component;
