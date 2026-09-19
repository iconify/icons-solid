import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qrt-pxbjg.css';
import '../../css/g/gkx4_bm2t.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="qrt-pxbjg"/><path class="gkx4_bm2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:angle-left"} {...others} />);
}

export default Component;
