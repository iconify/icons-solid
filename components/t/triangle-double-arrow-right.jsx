import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qh1hhtown.css';
import '../../css/s/san_b9rep.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="qh1hhtown"/><path class="san_b9rep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:triangle-double-arrow-right"} {...others} />);
}

export default Component;
