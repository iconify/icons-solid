import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jlimnph7j.css';
import '../../css/y/y3145xb5z.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><circle class="jlimnph7j"/><path class="y3145xb5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:female"} {...others} />);
}

export default Component;
