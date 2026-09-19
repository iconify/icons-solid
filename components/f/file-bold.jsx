import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_vbvlbcl.css';
import '../../css/k/k0vwi4beb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="y_vbvlbcl"/><path class="k0vwi4beb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:file-bold"} {...others} />);
}

export default Component;
