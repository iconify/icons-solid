import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qpa68_bth.css';
import '../../css/h/ho4ruxpoy.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="qpa68_bth"/><path class="ho4ruxpoy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:button-arrow-up"} {...others} />);
}

export default Component;
