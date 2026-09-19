import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gssnz_6uu.css';
import '../../css/q/q4g7x6byd.css';
import '../../css/f/fv8g9ogfd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="gssnz_6uu"/><path class="q4g7x6byd"/><path class="fv8g9ogfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:turn-sign-duo"} {...others} />);
}

export default Component;
