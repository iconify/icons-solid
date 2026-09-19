import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lemzthfhi.css';
import '../../css/l/l-fafkwmc.css';
import '../../css/s/slj04ubjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lemzthfhi"/><path class="l-fafkwmc"/><path class="slj04ubjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hierarchy-square-07"} {...others} />);
}

export default Component;
