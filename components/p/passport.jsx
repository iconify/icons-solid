import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tcke7pbqg.css';
import '../../css/y/y-qjg-szy.css';
import '../../css/c/cnngty1vp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tcke7pbqg"/><path class="y-qjg-szy"/><path class="cnngty1vp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:passport"} {...others} />);
}

export default Component;
