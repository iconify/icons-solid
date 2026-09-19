import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7nk9kbbt.css';
import '../../css/l/lu2cild_d.css';
import '../../css/h/hemvncbmx.css';
import '../../css/h/hqycppbku.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="q7nk9kbbt"/><path class="lu2cild_d"/><path class="hemvncbmx"/><path class="hqycppbku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-duo"} {...others} />);
}

export default Component;
