import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sxzduxbhb.css';
import '../../css/l/l53l6wbno.css';
import '../../css/v/vpovynn1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="sxzduxbhb wm-shadow"/><path class="l53l6wbno wm-shadow"/><path class="vpovynn1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:usb"} {...others} />);
}

export default Component;
