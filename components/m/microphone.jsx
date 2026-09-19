import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5u58_1gl.css';
import '../../css/u/u63bkuz8q.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="p5u58_1gl"/><path class="u63bkuz8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:microphone"} {...others} />);
}

export default Component;
