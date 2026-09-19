import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kemmwwb6r.css';
import '../../css/z/zf9mdkp_a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="kemmwwb6r"/><path clip-rule="evenodd" class="zf9mdkp_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tachometer-1-bold"} {...others} />);
}

export default Component;
