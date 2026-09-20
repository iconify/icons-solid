import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hqygwwb5d.css';
import '../../css/e/e7sf8tb1d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="hqygwwb5d"/><path class="e7sf8tb1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:battery-low-sharp-duotone"} {...others} />);
}

export default Component;
