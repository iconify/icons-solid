import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/euswu1aos.css';
import '../../css/r/r_ta68biz.css';
import '../../css/f/fn1_yeb0r.css';
import '../../css/k/k6fuj7c6c.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="euswu1aos"/><path class="r_ta68biz"/><path class="fn1_yeb0r"/><path class="k6fuj7c6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:timer-1-outline"} {...others} />);
}

export default Component;
