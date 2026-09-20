import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn9fr8b3o.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ihb1zyblr.css';
import '../../css/r/r4rt3pp1f.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="jn9fr8b3o"/><g class="cuyn6tgcc"><path class="ihb1zyblr"/><path class="r4rt3pp1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:alarm-o"} {...others} />);
}

export default Component;
