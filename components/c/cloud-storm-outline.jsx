import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qpmrcbb5z.css';
import '../../css/o/oq4fybckd.css';
import '../../css/k/kwotsob1p.css';
import '../../css/o/o1btycv3s.css';
import '../../css/l/llv44swwl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qpmrcbb5z"/><path class="oq4fybckd"/><path class="kwotsob1p"/><path class="o1btycv3s"/><path class="llv44swwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-storm-outline"} {...others} />);
}

export default Component;
