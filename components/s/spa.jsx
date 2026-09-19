import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/odqj4ibcr.css';
import '../../css/r/rctv42bmh.css';
import '../../css/d/ddc43f37b.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="odqj4ibcr"/><path class="rctv42bmh"/><path class="ddc43f37b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:spa"} {...others} />);
}

export default Component;
