import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2zeyrb3d.css';
import '../../css/m/mt_24wbfp.css';
import '../../css/a/ad48d8_zu.css';
import '../../css/m/mud8mzzce.css';
import '../../css/v/vnkjmacuq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x2zeyrb3d"/><path class="mt_24wbfp"/><path class="ad48d8_zu"/><rect transform="rotate(-45 24.93 -5.17)scale(1 -1)" class="mud8mzzce"/><path class="vnkjmacuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:kayak"} {...others} />);
}

export default Component;
