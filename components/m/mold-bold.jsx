import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eb_z5qbdz.css';
import '../../css/u/uc3w6cwkm.css';
import '../../css/l/lumasop3o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eb_z5qbdz"/><path clip-rule="evenodd" class="uc3w6cwkm"/><path class="lumasop3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mold-bold"} {...others} />);
}

export default Component;
