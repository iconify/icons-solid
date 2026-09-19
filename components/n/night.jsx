import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ipgt47_0k.css';
import '../../css/r/r-pqkabzn.css';
import '../../css/f/f2_lv5bmr.css';
import '../../css/d/d6k18obis.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ipgt47_0k"/><path class="r-pqkabzn"/><path clip-rule="evenodd" class="f2_lv5bmr"/><path class="d6k18obis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:night"} {...others} />);
}

export default Component;
