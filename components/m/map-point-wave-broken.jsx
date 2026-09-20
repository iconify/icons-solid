import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c8_7p-sow.css';
import '../../css/v/vv52kbcqz.css';
import '../../css/m/mma4vmbcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c8_7p-sow"/><path class="vv52kbcqz"/><path class="mma4vmbcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-point-wave-broken"} {...others} />);
}

export default Component;
