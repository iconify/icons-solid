import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/us3b29bhz.css';
import '../../css/z/zg2y63d-t.css';
import '../../css/m/muicpnbkb.css';
import '../../css/h/hnl-k1btp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="us3b29bhz"/><path clip-rule="evenodd" class="zg2y63d-t"/><path class="muicpnbkb"/><path clip-rule="evenodd" class="hnl-k1btp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:camcorder"} {...others} />);
}

export default Component;
