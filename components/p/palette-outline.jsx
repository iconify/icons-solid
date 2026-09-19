import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xmrttlbyf.css';
import '../../css/t/tvb-a3rpz.css';
import '../../css/j/jabh3esin.css';
import '../../css/k/kb_nqjyfv.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xmrttlbyf"/><path class="tvb-a3rpz"/><path class="jabh3esin"/><path class="kb_nqjyfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:palette-outline"} {...others} />);
}

export default Component;
