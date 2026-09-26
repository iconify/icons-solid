import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/u/unglyeb7q.css';
import '../../css/l/ldk1s7bmt.css';
import '../../css/d/d_o7v-41g.css';
import '../../css/p/pinm7knhp.css';
import '../../css/e/ee6uq8blu.css';
import '../../css/r/rflm0kmqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="unglyeb7q"/><path class="ldk1s7bmt"/><path class="d_o7v-41g"/></g><path class="pinm7knhp"/><path class="ee6uq8blu"/><path class="rflm0kmqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:perfume-bold-duotone"} {...others} />);
}

export default Component;
