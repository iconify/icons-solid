import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k6y8aobjy.css';
import '../../css/l/lbbvun5sx.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="k6y8aobjy"/><path clip-rule="evenodd" class="lbbvun5sx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:battery-100-20-solid"} {...others} />);
}

export default Component;
