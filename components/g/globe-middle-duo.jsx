import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk2uwtblc.css';
import '../../css/l/lbti0vbpg.css';
import '../../css/k/kx3lczbpu.css';
import '../../css/n/n8c6bo9hy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vk2uwtblc"/><path clip-rule="evenodd" class="lbti0vbpg"/><path class="kx3lczbpu"/><path class="n8c6bo9hy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-middle-duo"} {...others} />);
}

export default Component;
