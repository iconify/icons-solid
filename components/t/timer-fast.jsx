import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e35iv0bxz.css';
import '../../css/c/cdxewcgaf.css';
import '../../css/q/q2ugb5u6c.css';
import '../../css/d/dn920gb_j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="e35iv0bxz"/><path class="cdxewcgaf"/><path class="q2ugb5u6c"/><path class="dn920gb_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:timer-fast"} {...others} />);
}

export default Component;
