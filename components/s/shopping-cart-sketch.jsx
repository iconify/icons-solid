import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rnl2s3bta.css';
import '../../css/l/limikcbir.css';
import '../../css/y/yo47m6hva.css';
import '../../css/o/osc4domqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rnl2s3bta"/><path class="limikcbir wm-k"/><path class="wm-k yo47m6hva"/><path class="osc4domqp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shopping-cart-sketch"} {...others} />);
}

export default Component;
