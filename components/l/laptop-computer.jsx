import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xq0l1dbym.css';
import '../../css/k/k_y44mokq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="xq0l1dbym"/><path class="k_y44mokq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:laptop-computer"} {...others} />);
}

export default Component;
