import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/k7ay_cy9o.css';
import '../../css/h/h1ith1n0v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="k7ay_cy9o"/><path class="h1ith1n0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:link-four"} {...others} />);
}

export default Component;
