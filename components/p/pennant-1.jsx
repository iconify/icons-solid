import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oo1o-wb_v.css';
import '../../css/f/f-9kkmbuq.css';
import '../../css/x/x402yubhs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oo1o-wb_v"/><path class="f-9kkmbuq"/><path class="x402yubhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:pennant-1"} {...others} />);
}

export default Component;
