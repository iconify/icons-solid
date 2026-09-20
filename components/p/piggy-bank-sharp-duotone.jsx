import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s8izyxzyl.css';
import '../../css/y/ycbr2ubsi.css';
import '../../css/o/oqga-sb1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="s8izyxzyl"/><path class="ycbr2ubsi"/><path clip-rule="evenodd" class="oqga-sb1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:piggy-bank-sharp-duotone"} {...others} />);
}

export default Component;
