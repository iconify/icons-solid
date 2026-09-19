import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r39zhw3ax.css';
import '../../css/h/h19k08drx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="r39zhw3ax"/><path class="h19k08drx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flow"} {...others} />);
}

export default Component;
