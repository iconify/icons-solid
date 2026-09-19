import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/myrpatbnz.css';
import '../../css/u/u1ml7p6aa.css';
import '../../css/x/xibwbdbhh.css';
import '../../css/e/eieyzobuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="myrpatbnz"/><path class="u1ml7p6aa"/><path class="xibwbdbhh"/><path class="eieyzobuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:usb-solid"} {...others} />);
}

export default Component;
