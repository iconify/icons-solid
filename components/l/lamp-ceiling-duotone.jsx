import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wk_b57b8m.css';
import '../../css/f/fb_x9zb8o.css';
import '../../css/q/qwetcybvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wk_b57b8m"/><path class="fb_x9zb8o"/><path class="qwetcybvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lamp-ceiling-duotone"} {...others} />);
}

export default Component;
