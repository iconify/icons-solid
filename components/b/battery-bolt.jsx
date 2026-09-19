import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tr6gbxluw.css';
import '../../css/k/knq1obbqm.css';
import '../../css/r/rlafmm9-k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tr6gbxluw"/><path clip-rule="evenodd" class="knq1obbqm"/><path class="rlafmm9-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:battery-bolt"} {...others} />);
}

export default Component;
