import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dreuuh66c.css';
import '../../css/c/c7l0uwbsa.css';
import '../../css/d/dfm8uyd9a.css';
import '../../css/k/khrsx4-mv.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dreuuh66c"/><path class="c7l0uwbsa"/><path class="dfm8uyd9a"/><path class="khrsx4-mv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-oceania-outline"} {...others} />);
}

export default Component;
