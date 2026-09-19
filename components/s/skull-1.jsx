import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zp7a1qy_q.css';
import '../../css/f/fi8_qr5yv.css';
import '../../css/d/d_p_uxhob.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zp7a1qy_q"/><path class="fi8_qr5yv"/><path class="d_p_uxhob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:skull-1"} {...others} />);
}

export default Component;
