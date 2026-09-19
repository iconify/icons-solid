import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mut7a7boq.css';
import '../../css/l/ly03zhb3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mut7a7boq"/><path class="ly03zhb3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:palette"} {...others} />);
}

export default Component;
