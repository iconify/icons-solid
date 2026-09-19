import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lhti6p55o.css';
import '../../css/k/kdw727bvn.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="lhti6p55o"/><path class="kdw727bvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:resize-out-frame"} {...others} />);
}

export default Component;
