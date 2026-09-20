import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/httstt_8v.css';
import '../../css/z/zaq8jgbqr.css';
import '../../css/o/ouhyjzb-t.css';
import '../../css/f/fgvk_fggm.css';
import '../../css/n/nnxcjrbps.css';
import '../../css/t/t1kk68lra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="httstt_8v"><path class="zaq8jgbqr"/><path class="ouhyjzb-t"/></g><path class="fgvk_fggm"/><path class="nnxcjrbps"/><path class="t1kk68lra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:routing-2-bold-duotone"} {...others} />);
}

export default Component;
