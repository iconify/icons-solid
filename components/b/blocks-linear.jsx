import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y0emr6j5v.css';
import '../../css/a/awz1qr1sm.css';
import '../../css/g/gg51fnb0j.css';
import '../../css/r/rultmacqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y0emr6j5v"/><path class="awz1qr1sm"/><path class="gg51fnb0j"/><path class="rultmacqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:blocks-linear"} {...others} />);
}

export default Component;
