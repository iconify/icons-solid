import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6izixboo.css';
import '../../css/o/o86d_8b7c.css';
import '../../css/r/rxeidbcdm.css';
import '../../css/t/t5qk98btm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j6izixboo"/><path class="o86d_8b7c"/><path clip-rule="evenodd" class="rxeidbcdm"/><path class="t5qk98btm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grin-squint-tears-outline"} {...others} />);
}

export default Component;
