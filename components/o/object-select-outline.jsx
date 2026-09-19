import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q2d7wifgq.css';
import '../../css/t/t7ot3meuc.css';
import '../../css/i/i6pe9j1hl.css';
import '../../css/i/i5vrvnltr.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="q2d7wifgq"/><path class="t7ot3meuc"/><path class="i6pe9j1hl"/><path class="i5vrvnltr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:object-select-outline"} {...others} />);
}

export default Component;
