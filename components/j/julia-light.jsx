import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/l/lnnmczb-l.css';
import '../../css/y/yd5g6m-wm.css';
import '../../css/o/oj999ohem.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="lnnmczb-l"/><path class="yd5g6m-wm"/><path class="oj999ohem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:julia-light"} {...others} />);
}

export default Component;
