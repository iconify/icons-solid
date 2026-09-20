import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dzu-ecctv.css';
import '../../css/p/ptgawoh2e.css';
import '../../css/c/ci5f0y_xe.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="dzu-ecctv"/><path class="ptgawoh2e"/><path class="ci5f0y_xe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:building"} {...others} />);
}

export default Component;
