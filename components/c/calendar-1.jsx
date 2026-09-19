import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yf-jas5-p.css';
import '../../css/a/a4x0ncbgp.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="yf-jas5-p"/><path class="a4x0ncbgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:calendar-1"} {...others} />);
}

export default Component;
