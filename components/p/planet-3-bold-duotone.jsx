import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y9e2kcbuv.css';
import '../../css/k/k774yynor.css';
import '../../css/d/dnka95bah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y9e2kcbuv"/><path class="k774yynor"/><path class="dnka95bah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:planet-3-bold-duotone"} {...others} />);
}

export default Component;
