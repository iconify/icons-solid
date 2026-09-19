import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/ejhs2ub5n.css';
import '../../css/j/j8v342ebz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ejhs2ub5n"/><path class="j8v342ebz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:two-dimensional-code"} {...others} />);
}

export default Component;
