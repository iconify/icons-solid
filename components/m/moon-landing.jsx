import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kp4sgbfpe.css';
import '../../css/i/iqamq8bdl.css';
import '../../css/y/y6ovjwbid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kp4sgbfpe"/><path class="iqamq8bdl"/><path class="y6ovjwbid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:moon-landing"} {...others} />);
}

export default Component;
