import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zx7uv5q7n.css';
import '../../css/f/f_mfzu3uv.css';
import '../../css/y/yu-13qbwi.css';
import '../../css/g/gablpk-so.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zx7uv5q7n"/><path class="f_mfzu3uv"/><path class="yu-13qbwi"/><path class="gablpk-so"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cogs-1-outline"} {...others} />);
}

export default Component;
