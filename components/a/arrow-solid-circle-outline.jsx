import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l6isbtbxr.css';
import '../../css/a/a47_f0m3e.css';
import '../../css/c/cx_isemhf.css';
import '../../css/d/ddq-3fb3s.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="l6isbtbxr"/><path class="a47_f0m3e"/><path class="cx_isemhf"/><path class="ddq-3fb3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-solid-circle-outline"} {...others} />);
}

export default Component;
