import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fbqfi4sib.css';
import '../../css/y/y7r8vsqdr.css';
import '../../css/e/e56ib4b-i.css';
import '../../css/e/e0oiq1b4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fbqfi4sib"/><path clip-rule="evenodd" class="y7r8vsqdr"/><path class="e56ib4b-i"/><path class="e0oiq1b4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:jar-of-pills-bold"} {...others} />);
}

export default Component;
