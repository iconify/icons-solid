import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e0ej8qrej.css';
import '../../css/r/r1brjkc3k.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="e0ej8qrej"/><path class="r1brjkc3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:file-earmark-person"} {...others} />);
}

export default Component;
