import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hw2_d4bhh.css';
import '../../css/g/ggf5rsbim.css';
import '../../css/q/qj671zbhd.css';
import '../../css/e/ez8eymb-h.css';
import '../../css/m/m8xyetqia.css';

const viewBox = {"width":1512,"height":1511};
const content = `<g class="cuyn6tgcc"><path class="hw2_d4bhh"/><path class="ggf5rsbim"/><path class="qj671zbhd"/><path class="ez8eymb-h"/><path class="m8xyetqia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:masan-group"} {...others} />);
}

export default Component;
