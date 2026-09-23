import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fy0-wxbjy.css';
import '../../css/n/n3_4b3b1z.css';
import '../../css/l/l2_1s-n1o.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="fy0-wxbjy"><path class="n3_4b3b1z"/><path class="l2_1s-n1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nowly"} {...others} />);
}

export default Component;
