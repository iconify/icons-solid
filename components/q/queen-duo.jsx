import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cykxjydxv.css';
import '../../css/y/yn4yn4b1o.css';
import '../../css/w/w1pwh69iw.css';
import '../../css/w/wom2ccbik.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="cykxjydxv"/><path class="yn4yn4b1o"/><path class="w1pwh69iw"/><path class="wom2ccbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:queen-duo"} {...others} />);
}

export default Component;
