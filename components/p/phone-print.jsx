import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dd3lsl1ga.css';
import '../../css/y/ypuiyfb9m.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="dd3lsl1ga"/><path clip-rule="evenodd" class="ypuiyfb9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:phone-print"} {...others} />);
}

export default Component;
