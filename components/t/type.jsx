import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qcy8x4mpl.css';
import '../../css/d/dccdxlb0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qcy8x4mpl"/><path class="dccdxlb0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:type"} {...others} />);
}

export default Component;
