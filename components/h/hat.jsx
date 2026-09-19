import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zb6y2cc4w.css';
import '../../css/i/itpqvhb6v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="zb6y2cc4w"/><path class="itpqvhb6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:hat"} {...others} />);
}

export default Component;
