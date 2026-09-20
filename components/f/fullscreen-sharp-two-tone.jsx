import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mcsnw-7-k.css';
import '../../css/n/ni_d926rs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="mcsnw-7-k"/><path class="ni_d926rs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:fullscreen-sharp-two-tone"} {...others} />);
}

export default Component;
