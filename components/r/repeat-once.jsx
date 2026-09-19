import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ezwwaubim.css';
import '../../css/i/ij_fhvbsj.css';
import '../../css/y/ywutn4bbr.css';
import '../../css/t/taozkpnwj.css';
import '../../css/e/enleh8bwz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ezwwaubim"/><path class="ij_fhvbsj"/><path class="ywutn4bbr"/><path class="taozkpnwj"/><path class="enleh8bwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:repeat-once"} {...others} />);
}

export default Component;
