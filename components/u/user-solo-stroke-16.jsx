import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/tc3hrxbmr.css';
import '../../css/x/xho4_r_6q.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><circle class="tc3hrxbmr"/><path class="xho4_r_6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-solo-stroke-16"} {...others} />);
}

export default Component;
