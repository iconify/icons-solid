import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tslmujbuk.css';
import '../../css/s/s2gsuob4v.css';
import '../../css/n/ncksa-wla.css';
import '../../css/e/epfmi3b_p.css';
import '../../css/g/gd6-t-b2x.css';
import '../../css/b/bx1996_eu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tslmujbuk"/><path class="s2gsuob4v"/><path class="ncksa-wla"/><path class="epfmi3b_p"/><circle class="gd6-t-b2x"/><path class="bx1996_eu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-charge-line-duotone"} {...others} />);
}

export default Component;
