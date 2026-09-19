import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/shtly5bpz.css';
import '../../css/c/c460bt_5h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="shtly5bpz"/><path clip-rule="evenodd" class="c460bt_5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:stop-sign-bold"} {...others} />);
}

export default Component;
