import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l2-f6o6kv.css';
import '../../css/k/kdbnk1p6s.css';
import '../../css/b/bxgre1bwl.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(1)" class="n1lsf0bnc"><ellipse class="l2-f6o6kv"/><ellipse class="kdbnk1p6s"/><path class="bxgre1bwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:strolley"} {...others} />);
}

export default Component;
