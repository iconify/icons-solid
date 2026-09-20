import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/n/n6l23acuc.css';
import '../../css/k/ktx3j7bbv.css';
import '../../css/o/ouwn5h0wn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="n6l23acuc"/><path class="ktx3j7bbv"/></g><path class="ouwn5h0wn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pen-2-bold-duotone"} {...others} />);
}

export default Component;
