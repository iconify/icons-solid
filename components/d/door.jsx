import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/os_tdyjga.css';
import '../../css/g/gcohp_b3e.css';
import '../../css/n/ndz3s8e5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="os_tdyjga"/><path class="gcohp_b3e"/><path class="ndz3s8e5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:door"} {...others} />);
}

export default Component;
