import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/u/ubczdxbzu.css';
import '../../css/v/v5zmisb0l.css';
import '../../css/k/k73vt3bvb.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="ubczdxbzu"/><path class="v5zmisb0l"/><path class="k73vt3bvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:box-open"} {...others} />);
}

export default Component;
