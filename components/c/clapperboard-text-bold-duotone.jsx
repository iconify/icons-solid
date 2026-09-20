import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9y-gkoam.css';
import '../../css/x/x5lpvmlvk.css';
import '../../css/y/yhvy4lkom.css';
import '../../css/p/psvnbab7k.css';
import '../../css/d/dd7-ubcex.css';
import '../../css/g/g1vwf5buo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r9y-gkoam"/><path class="x5lpvmlvk"/><path class="yhvy4lkom"/><path class="psvnbab7k"/><path class="dd7-ubcex"/><path class="g1vwf5buo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-text-bold-duotone"} {...others} />);
}

export default Component;
