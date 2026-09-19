import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u9a2cyase.css';
import '../../css/q/qprl4g26d.css';
import '../../css/a/av3ck0bqi.css';
import '../../css/g/g9l87eu5x.css';
import '../../css/i/iad76iwuh.css';
import '../../css/v/v4wae60vb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u9a2cyase"/><path clip-rule="evenodd" class="qprl4g26d"/><path class="av3ck0bqi"/><rect transform="rotate(-30 17.248 47.874)" class="g9l87eu5x"/><rect transform="rotate(150 21.21 21.157)scale(1 -1)" class="iad76iwuh"/><path clip-rule="evenodd" class="v4wae60vb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:car-bump"} {...others} />);
}

export default Component;
