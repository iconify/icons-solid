import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zm4entb4o.css';
import '../../css/w/walkp0vuh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="zm4entb4o"/><path clip-rule="evenodd" class="walkp0vuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building-hospital-bold"} {...others} />);
}

export default Component;
