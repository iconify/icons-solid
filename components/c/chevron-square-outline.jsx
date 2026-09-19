import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1qp3l54h.css';
import '../../css/t/tj4vulnki.css';
import '../../css/o/okr_p42se.css';
import '../../css/q/qff5zwbcp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="e1qp3l54h"/><path clip-rule="evenodd" class="tj4vulnki"/><path class="okr_p42se"/><path clip-rule="evenodd" class="qff5zwbcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chevron-square-outline"} {...others} />);
}

export default Component;
