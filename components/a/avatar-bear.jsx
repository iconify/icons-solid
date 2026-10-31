import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lim_lesma.css';
import '../../css/p/p8or_gjla.css';
import '../../css/c/cfnmr-b-v.css';
import '../../css/w/wc08x_b5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lim_lesma wm-shadow"/><path class="p8or_gjla wm-shadow"/><path class="cfnmr-b-v"/><path class="wc08x_b5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-bear"} {...others} />);
}

export default Component;
