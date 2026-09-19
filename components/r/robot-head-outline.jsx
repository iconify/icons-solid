import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jz4qbpbes.css';
import '../../css/o/otbkqlb6h.css';
import '../../css/h/hxogdab1a.css';
import '../../css/k/kayfskbga.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="jz4qbpbes"/><path class="otbkqlb6h"/><path class="hxogdab1a"/><path class="kayfskbga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:robot-head-outline"} {...others} />);
}

export default Component;
