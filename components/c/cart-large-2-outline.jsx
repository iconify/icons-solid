import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uj7vncc3z.css';
import '../../css/m/mgxvo_oik.css';
import '../../css/t/ti8_utzrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uj7vncc3z"/><path class="mgxvo_oik"/><path class="ti8_utzrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-2-outline"} {...others} />);
}

export default Component;
