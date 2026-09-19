import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x16m-k90k.css';
import '../../css/g/g7w1vwbmn.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="x16m-k90k"/><path class="g7w1vwbmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:button-arrow-down"} {...others} />);
}

export default Component;
