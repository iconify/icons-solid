import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yeujkhbau.css';
import '../../css/r/rgza8wbpy.css';
import '../../css/k/krcyms04q.css';
import '../../css/l/luw467qkp.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yeujkhbau"/><path class="rgza8wbpy"/><path class="krcyms04q"/><path class="luw467qkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-layout-2-outline"} {...others} />);
}

export default Component;
