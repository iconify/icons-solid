import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eldw91wjy.css';
import '../../css/c/c_15j7blj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="eldw91wjy"/><path clip-rule="evenodd" class="c_15j7blj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:tv"} {...others} />);
}

export default Component;
