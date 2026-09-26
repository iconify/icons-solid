import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c1tnh90re.css';
import '../../css/u/umhpbtbew.css';
import '../../css/k/k3s44cqei.css';
import '../../css/m/mhu20obsk.css';
import '../../css/q/q6ch55bwb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c1tnh90re"/><path class="umhpbtbew"/><path class="k3s44cqei"/><path class="mhu20obsk"/><path class="q6ch55bwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnet-wave-bold"} {...others} />);
}

export default Component;
