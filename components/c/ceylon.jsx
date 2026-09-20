import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mk7e45w8q.css';
import '../../css/q/qoj1bdcyq.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="mk7e45w8q"/><path class="qoj1bdcyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:ceylon"} {...others} />);
}

export default Component;
