import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0j38ztpz.css';
import '../../css/t/twwb0_bxq.css';
import '../../css/g/gdul00bkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e0j38ztpz"/><path class="twwb0_bxq"/><path class="gdul00bkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-loud-line-duotone"} {...others} />);
}

export default Component;
