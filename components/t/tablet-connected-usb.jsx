import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x_z3bwv4t.css';
import '../../css/w/wttawfb0l.css';
import '../../css/z/z5_656mud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="x_z3bwv4t"/><path class="wttawfb0l"/><path class="z5_656mud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tablet-connected-usb"} {...others} />);
}

export default Component;
