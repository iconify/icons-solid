import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/ahr92ac1u.css';
import '../../css/r/rv91_vbdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ahr92ac1u"/><path class="rv91_vbdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:threat-usb"} {...others} />);
}

export default Component;
