import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o-ykjtgrt.css';
import '../../css/q/qhf8v1bth.css';
import '../../css/i/iu5m-vbcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o-ykjtgrt"/><path class="qhf8v1bth"/><path class="iu5m-vbcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pen-tablet-connect-usb"} {...others} />);
}

export default Component;
