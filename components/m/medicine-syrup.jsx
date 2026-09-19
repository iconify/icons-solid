import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/ryg37jbhz.css';
import '../../css/y/y3hguvblu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ryg37jbhz"/><path class="y3hguvblu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:medicine-syrup"} {...others} />);
}

export default Component;
