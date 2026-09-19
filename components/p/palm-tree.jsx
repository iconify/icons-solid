import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cxlyk5b-t.css';
import '../../css/x/xpxxzjbvo.css';
import '../../css/r/rt4x1ab2l.css';
import '../../css/y/yh2q36bcg.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="cxlyk5b-t"/><path class="xpxxzjbvo"/><path class="rt4x1ab2l"/><path class="yh2q36bcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:palm-tree"} {...others} />);
}

export default Component;
