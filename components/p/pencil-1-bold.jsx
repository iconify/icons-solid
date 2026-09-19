import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kqz1t_byv.css';
import '../../css/w/wl2pvqt_t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="kqz1t_byv"/><path clip-rule="evenodd" class="wl2pvqt_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pencil-1-bold"} {...others} />);
}

export default Component;
