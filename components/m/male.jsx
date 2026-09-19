import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/akzewbc_j.css';
import '../../css/t/t_oz4bcyb.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><circle class="akzewbc_j"/><path class="t_oz4bcyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:male"} {...others} />);
}

export default Component;
