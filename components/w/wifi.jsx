import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya8v8tb_k.css';
import '../../css/p/p1ys4ub_t.css';
import '../../css/n/njw1v7spu.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="ya8v8tb_k"/><path class="p1ys4ub_t"/><path class="njw1v7spu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:wifi"} {...others} />);
}

export default Component;
