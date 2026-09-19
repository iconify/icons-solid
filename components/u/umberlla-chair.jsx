import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q889o1jwv.css';
import '../../css/p/pijyxccjh.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="q889o1jwv"/><path class="pijyxccjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:umberlla-chair"} {...others} />);
}

export default Component;
