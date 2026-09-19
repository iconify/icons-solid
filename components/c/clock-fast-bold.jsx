import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wgu_60bdz.css';
import '../../css/n/nj8gx4bfi.css';
import '../../css/e/essrxs0ax.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="wgu_60bdz"/><path clip-rule="evenodd" class="nj8gx4bfi"/><path class="essrxs0ax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:clock-fast-bold"} {...others} />);
}

export default Component;
