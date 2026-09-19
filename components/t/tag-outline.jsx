import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u6omv9ofk.css';
import '../../css/e/e4p8vf7to.css';
import '../../css/g/glovd0xbt.css';
import '../../css/w/w45-n2gzk.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="u6omv9ofk"/><path class="e4p8vf7to"/><path class="glovd0xbt"/><path class="w45-n2gzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tag-outline"} {...others} />);
}

export default Component;
