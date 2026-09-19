import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bcrkiyb6q.css';
import '../../css/f/fv_3rybfk.css';
import '../../css/z/zlubvxnlz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bcrkiyb6q"/><path class="fv_3rybfk"/><path clip-rule="evenodd" class="zlubvxnlz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:varicose-vein-outline"} {...others} />);
}

export default Component;
