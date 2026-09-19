import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/haqszuawp.css';
import '../../css/n/n289_rbfx.css';
import '../../css/m/mhcrz7bok.css';
import '../../css/i/i6ykxkjyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="haqszuawp"/><rect class="n289_rbfx"/><path class="mhcrz7bok"/><path class="i6ykxkjyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:iou-outline"} {...others} />);
}

export default Component;
