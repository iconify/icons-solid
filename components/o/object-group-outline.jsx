import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gyo39-m2d.css';
import '../../css/s/sokkyvv6c.css';
import '../../css/r/rvn30zbso.css';
import '../../css/s/s9j1rccjl.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="gyo39-m2d"/><path class="sokkyvv6c"/><path class="rvn30zbso"/><path class="s9j1rccjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:object-group-outline"} {...others} />);
}

export default Component;
