import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/al1t21i5l.css';
import '../../css/w/wi6gu6bfm.css';
import '../../css/g/g5mtd3btz.css';
import '../../css/k/kqy7zwb1l.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="al1t21i5l"/><path class="wi6gu6bfm"/><path class="g5mtd3btz"/><path class="kqy7zwb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:toggle-outline"} {...others} />);
}

export default Component;
