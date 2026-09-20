import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t1rq9tb1r.css';
import '../../css/m/mhfymsb0m.css';
import '../../css/j/jriuusb4y.css';
import '../../css/x/xo5g78b6y.css';
import '../../css/x/xme0__e2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="t1rq9tb1r"/><path class="mhfymsb0m"/><path class="jriuusb4y"/><path class="xo5g78b6y"/><path class="xme0__e2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:instrument-accordian"} {...others} />);
}

export default Component;
