import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/zx_33b9xs.css';
import '../../css/k/kv4hm5kgo.css';
import '../../css/t/t9tp01bme.css';
import '../../css/s/spq-vywbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGZKFl8qTw" x1="9" x2="15" y1="3" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGZKFl8qTw)" class="zx_33b9xs"/><path class="kv4hm5kgo wm-shine"/><path class="t9tp01bme wm-shine"/><path class="spq-vywbq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:heart-handshake"} {...others} />);
}

export default Component;
