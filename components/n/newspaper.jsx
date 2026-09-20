import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/w/whd865izb.css';
import '../../css/n/nj6gqjb-d.css';
import '../../css/h/h-wpcv3yo.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="whd865izb"/><path class="nj6gqjb-d"/><path class="h-wpcv3yo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:newspaper"} {...others} />);
}

export default Component;
