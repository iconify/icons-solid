import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zsy9hqdwb.css';
import '../../css/r/rgza8wbpy.css';
import '../../css/q/qkhof_b-k.css';
import '../../css/l/luw467qkp.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zsy9hqdwb"/><path class="rgza8wbpy"/><path class="qkhof_b-k"/><path class="luw467qkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-layout-4-outline"} {...others} />);
}

export default Component;
