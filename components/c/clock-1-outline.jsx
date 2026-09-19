import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m23wa8bmm.css';
import '../../css/l/luchi18gl.css';
import '../../css/u/u18d3ddyr.css';
import '../../css/p/pqg7pcb_g.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="m23wa8bmm"/><path class="luchi18gl"/><path class="u18d3ddyr"/><path class="pqg7pcb_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:clock-1-outline"} {...others} />);
}

export default Component;
