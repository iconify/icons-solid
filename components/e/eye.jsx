import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e8f_t6izd.css';
import '../../css/p/pvd6u4yzv.css';
import '../../css/b/b2_d91zpb.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e8f_t6izd"/><path class="pvd6u4yzv"/><path clip-rule="evenodd" class="b2_d91zpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:eye"} {...others} />);
}

export default Component;
