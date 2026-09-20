import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sk1228b2x.css';
import '../../css/e/ezshh0bgn.css';
import '../../css/l/lum82dbar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sk1228b2x"/><path class="ezshh0bgn"/><path class="lum82dbar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:exit-line-duotone"} {...others} />);
}

export default Component;
