import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i4k067hwe.css';
import '../../css/l/l_ece5g_q.css';
import '../../css/y/y9o9hxb5k.css';
import '../../css/x/xo0nbcbpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i4k067hwe"/><path class="l_ece5g_q"/><path class="y9o9hxb5k"/><path class="xo0nbcbpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:eraser-circle"} {...others} />);
}

export default Component;
