import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oixm9mbkq.css';
import '../../css/f/f-n3xro7a.css';
import '../../css/p/pxo13_1dv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="oixm9mbkq"/><path clip-rule="evenodd" class="f-n3xro7a"/><path class="pxo13_1dv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-charge-minimalistic-outline"} {...others} />);
}

export default Component;
