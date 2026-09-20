import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/sv5ssrbji.css';
import '../../css/i/incuzmb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="sv5ssrbji"/><path class="incuzmb7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mail-dot-sharp-two-tone"} {...others} />);
}

export default Component;
