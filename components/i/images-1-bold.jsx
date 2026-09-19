import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x676eyzld.css';
import '../../css/i/i2h23ab7x.css';
import '../../css/v/vzoaje6mh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="x676eyzld"/><path class="i2h23ab7x"/><path clip-rule="evenodd" class="vzoaje6mh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:images-1-bold"} {...others} />);
}

export default Component;
