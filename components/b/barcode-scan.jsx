import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aq0r-rk9e.css';
import '../../css/i/imi_ebbbr.css';
import '../../css/r/rlrjkrbhz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aq0r-rk9e"/><path class="imi_ebbbr"/><path class="rlrjkrbhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:barcode-scan"} {...others} />);
}

export default Component;
