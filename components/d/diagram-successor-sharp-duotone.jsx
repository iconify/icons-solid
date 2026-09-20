import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/avxzc_4lt.css';
import '../../css/m/meju_obdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="avxzc_4lt"/><path class="meju_obdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:diagram-successor-sharp-duotone"} {...others} />);
}

export default Component;
