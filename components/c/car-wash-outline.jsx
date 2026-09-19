import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a0xx5x-li.css';
import '../../css/i/iyk_vub8h.css';
import '../../css/i/ieaxcrbun.css';
import '../../css/u/u3k67q4lu.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="a0xx5x-li"/><path class="iyk_vub8h"/><path class="ieaxcrbun"/><path class="u3k67q4lu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-wash-outline"} {...others} />);
}

export default Component;
