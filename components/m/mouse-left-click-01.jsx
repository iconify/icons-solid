import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pyyynhfqd.css';
import '../../css/f/f6hdfiifw.css';
import '../../css/j/j7hywqb8i.css';
import '../../css/u/u7cc7wb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pyyynhfqd"/><path class="f6hdfiifw"/><path class="j7hywqb8i"/><path class="u7cc7wb7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-left-click-01"} {...others} />);
}

export default Component;
