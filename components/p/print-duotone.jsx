import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bfydjaclu.css';
import '../../css/w/wwd6z-p7h.css';
import '../../css/t/t-wbufy3i.css';
import '../../css/z/zefpwibul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bfydjaclu"/><path class="wwd6z-p7h"/><path class="t-wbufy3i"/><path class="zefpwibul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:print-duotone"} {...others} />);
}

export default Component;
