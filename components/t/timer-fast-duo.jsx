import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gfb_y0bgv.css';
import '../../css/t/tz3jlipja.css';
import '../../css/g/gf6_545td.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="gfb_y0bgv"/><path class="tz3jlipja"/><path class="gf6_545td"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:timer-fast-duo"} {...others} />);
}

export default Component;
