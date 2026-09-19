import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ci5117w1h.css';
import '../../css/a/a47_f0m3e.css';
import '../../css/p/p_j979b9g.css';
import '../../css/e/enbo6ebuz.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ci5117w1h"/><path class="a47_f0m3e"/><path class="p_j979b9g"/><path class="enbo6ebuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:compass-outline"} {...others} />);
}

export default Component;
