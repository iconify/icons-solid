import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbvb_ybvn.css';
import '../../css/i/iixqs_bxl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="cbvb_ybvn"/><path class="iixqs_bxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:head-side-duo"} {...others} />);
}

export default Component;
