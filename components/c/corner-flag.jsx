import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n46qgjdva.css';
import '../../css/e/ez100dohu.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="n46qgjdva"/><path class="ez100dohu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:corner-flag"} {...others} />);
}

export default Component;
