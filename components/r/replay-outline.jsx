import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cj97-rb3b.css';
import '../../css/g/g4ms8_b2o.css';
import '../../css/k/k4op9itrz.css';
import '../../css/d/de2eu9b8o.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="cj97-rb3b"/><path class="g4ms8_b2o"/><path class="k4op9itrz"/><path class="de2eu9b8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:replay-outline"} {...others} />);
}

export default Component;
