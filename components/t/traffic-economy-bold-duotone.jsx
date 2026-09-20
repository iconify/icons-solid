import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/m/mee3cb-6s.css';
import '../../css/m/mi29unbna.css';
import '../../css/q/qzg6_gw1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="mee3cb-6s"/><path class="mi29unbna"/><path class="qzg6_gw1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:traffic-economy-bold-duotone"} {...others} />);
}

export default Component;
