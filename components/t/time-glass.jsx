import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jdkzrmbaf.css';
import '../../css/j/jbqa_1dbz.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="jdkzrmbaf"/><path class="jbqa_1dbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:time-glass"} {...others} />);
}

export default Component;
