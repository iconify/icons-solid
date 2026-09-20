import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_wg89hjr.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/kzd57cc0u.css';
import '../../css/h/h3g8i1brp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i_wg89hjr"/><g class="mc2zb0bvp"><path class="kzd57cc0u"/><path class="h3g8i1brp"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-loud-bold-duotone"} {...others} />);
}

export default Component;
