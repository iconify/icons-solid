import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z9gsdx3mg.css';
import '../../css/x/xn39h-g0p.css';
import '../../css/b/b8zhl9blw.css';
import '../../css/w/wewxyhbwh.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z9gsdx3mg"/><path clip-rule="evenodd" class="xn39h-g0p"/><path clip-rule="evenodd" class="b8zhl9blw"/><path class="wewxyhbwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:map"} {...others} />);
}

export default Component;
