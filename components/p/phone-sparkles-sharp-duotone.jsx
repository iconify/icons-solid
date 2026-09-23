import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vk9v_xb8o.css';
import '../../css/s/snibgdcaa.css';
import '../../css/n/n19x7nf9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="vk9v_xb8o"/><path class="snibgdcaa"/><path class="n19x7nf9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:phone-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
