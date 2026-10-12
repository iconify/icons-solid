import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqcidrb0g.css';
import '../../css/y/yf36usbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aqcidrb0g"/><path class="yf36usbxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tent"} {...others} />);
}

export default Component;
