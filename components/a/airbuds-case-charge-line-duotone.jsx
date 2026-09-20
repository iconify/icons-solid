import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xo5liybaf.css';
import '../../css/y/y0do8_bvl.css';
import '../../css/i/il3n3pbvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xo5liybaf"/><path class="y0do8_bvl"/><path class="il3n3pbvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-case-charge-line-duotone"} {...others} />);
}

export default Component;
