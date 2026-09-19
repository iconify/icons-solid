import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ij_bhcb3h.css';
import '../../css/y/yn9mccbbf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="ij_bhcb3h"/><path class="yn9mccbbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:path-1-bold"} {...others} />);
}

export default Component;
