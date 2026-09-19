import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vmjdbbbns.css';
import '../../css/o/ovfl4e5in.css';
import '../../css/v/vu30hf7-w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="vmjdbbbns"/><path clip-rule="evenodd" class="ovfl4e5in"/><path class="vu30hf7-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sofa-bold"} {...others} />);
}

export default Component;
