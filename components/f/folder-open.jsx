import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5qe7gbrm.css';
import '../../css/d/dohlm2b5t.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="j5qe7gbrm"/><path class="dohlm2b5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:folder-open"} {...others} />);
}

export default Component;
