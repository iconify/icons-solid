import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mjti1ubds.css';
import '../../css/y/y4it-0ebg.css';
import '../../css/j/jojqpu_4z.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="cuyn6tgcc"><path class="mjti1ubds"/><circle class="y4it-0ebg"/><circle class="jojqpu_4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:option-horizontal"} {...others} />);
}

export default Component;
