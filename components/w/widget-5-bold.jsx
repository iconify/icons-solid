import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kegcs-8wl.css';
import '../../css/u/urak06bsx.css';
import '../../css/x/xqvy96-xr.css';
import '../../css/b/bid5r0rff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kegcs-8wl"/><path class="urak06bsx"/><path class="xqvy96-xr"/><path class="bid5r0rff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-5-bold"} {...others} />);
}

export default Component;
