import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z9j6zc6wk.css';
import '../../css/r/rjlz1ycng.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="z9j6zc6wk"/><path class="rjlz1ycng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:wheel"} {...others} />);
}

export default Component;
