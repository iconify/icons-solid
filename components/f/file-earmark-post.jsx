import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u681_fbxz.css';
import '../../css/a/ao7s_z9ri.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="u681_fbxz"/><path class="ao7s_z9ri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:file-earmark-post"} {...others} />);
}

export default Component;
