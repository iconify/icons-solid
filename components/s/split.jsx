import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgae5obin.css';
import '../../css/v/v88pvbb0m.css';
import '../../css/i/i5t85rbkh.css';
import '../../css/u/urlyb6bqb.css';
import '../../css/j/j-5s-bc0v.css';
import '../../css/f/fs2-b77kx.css';
import '../../css/z/z_4gig_ms.css';
import '../../css/h/hv2ng3bjk.css';
import '../../css/l/l2e_174ew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mgae5obin wm-shadow"/><path class="v88pvbb0m wm-shadow"/><path class="i5t85rbkh"/><path class="urlyb6bqb"/><path class="j-5s-bc0v"/><path class="fs2-b77kx"/><path class="wm-shine z_4gig_ms"/><path class="hv2ng3bjk wm-shine"/><path class="l2e_174ew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:split"} {...others} />);
}

export default Component;
