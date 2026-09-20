import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x824uwwuu.css';
import '../../css/d/d4nk24yqs.css';
import '../../css/l/lwxjz0bri.css';
import '../../css/t/t31vi_b7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="x824uwwuu"/><path class="d4nk24yqs"/><path class="lwxjz0bri"/><path class="t31vi_b7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-bookmark-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
