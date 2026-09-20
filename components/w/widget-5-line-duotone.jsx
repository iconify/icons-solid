import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l5um6lj1h.css';
import '../../css/d/drgun2b_o.css';
import '../../css/y/ynfoavvdq.css';
import '../../css/o/ok3e5hr6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l5um6lj1h"/><path class="drgun2b_o"/><path class="ynfoavvdq"/><path class="ok3e5hr6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-5-line-duotone"} {...others} />);
}

export default Component;
