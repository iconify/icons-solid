import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mafgtablf.css';
import '../../css/q/q-vxnsbbp.css';
import '../../css/k/kw39cfx6s.css';
import '../../css/y/yeb076bmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mafgtablf"/><path clip-rule="evenodd" class="q-vxnsbbp"/><path clip-rule="evenodd" class="kw39cfx6s"/><path clip-rule="evenodd" class="yeb076bmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-check-outline"} {...others} />);
}

export default Component;
