import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rfnphpyms.css';
import '../../css/e/ekf464gcd.css';
import '../../css/r/rb4mrx5mp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rfnphpyms"/><path class="ekf464gcd"/><path clip-rule="evenodd" class="rb4mrx5mp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-a-p-24px"} {...others} />);
}

export default Component;
