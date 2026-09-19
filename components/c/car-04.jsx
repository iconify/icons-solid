import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ewl44ydcb.css';
import '../../css/j/j6pyn-c5m.css';
import '../../css/n/nv0-gzyhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ewl44ydcb"/><path class="j6pyn-c5m"/><path class="nv0-gzyhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:car-04"} {...others} />);
}

export default Component;
