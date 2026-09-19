import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ym7o_3bag.css';
import '../../css/z/zexrpbczl.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><circle class="ym7o_3bag"/><path class="zexrpbczl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:blind"} {...others} />);
}

export default Component;
