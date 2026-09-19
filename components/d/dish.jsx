import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wbqzlj9jr.css';
import '../../css/n/nrq_3zyrs.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="wbqzlj9jr"/><path class="nrq_3zyrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:dish"} {...others} />);
}

export default Component;
