import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qrgik876e.css';
import '../../css/j/j6fnzbcow.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="qrgik876e"/><path class="j6fnzbcow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:roller"} {...others} />);
}

export default Component;
