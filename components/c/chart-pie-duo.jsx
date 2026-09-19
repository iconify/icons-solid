import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iys3ltbnj.css';
import '../../css/i/i3nxxg_xz.css';
import '../../css/t/tt70qeycs.css';
import '../../css/i/i0b_8nkbs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="iys3ltbnj"/><path class="i3nxxg_xz"/><path class="tt70qeycs"/><path class="i0b_8nkbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chart-pie-duo"} {...others} />);
}

export default Component;
