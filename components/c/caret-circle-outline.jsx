import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a3x0u_b2g.css';
import '../../css/y/yev7me0jl.css';
import '../../css/l/l38-skyep.css';
import '../../css/h/h71ihjbka.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="a3x0u_b2g"/><path class="yev7me0jl"/><path class="l38-skyep"/><path class="h71ihjbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:caret-circle-outline"} {...others} />);
}

export default Component;
