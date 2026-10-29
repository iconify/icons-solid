import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxq2pwcpn.css';
import '../../css/t/tq3ys6k3t.css';
import '../../css/y/ys2rtru9v.css';
import '../../css/y/yjgua6bap.css';
import '../../css/p/pmwfordam.css';
import '../../css/e/e4gyvfb8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xxq2pwcpn"/><path class="tq3ys6k3t wm-k"/><path class="wm-k ys2rtru9v"/><path class="wm-k yjgua6bap"/><path class="pmwfordam wm-shine"/><path class="e4gyvfb8x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:bread"} {...others} />);
}

export default Component;
