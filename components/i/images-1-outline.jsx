import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/or3aysb-z.css';
import '../../css/r/rdyict78a.css';
import '../../css/u/ua4-rlagr.css';
import '../../css/c/ct-v8-bvm.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="or3aysb-z"/><path class="rdyict78a"/><path class="ua4-rlagr"/><path class="ct-v8-bvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:images-1-outline"} {...others} />);
}

export default Component;
