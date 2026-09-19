import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xh615mbjx.css';
import '../../css/v/vshyqdb9o.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="xh615mbjx"/><path class="vshyqdb9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:wood-stove"} {...others} />);
}

export default Component;
