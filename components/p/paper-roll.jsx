import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ra5po4-js.css';
import '../../css/c/cqgkojblt.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="ra5po4-js"/><path class="cqgkojblt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:paper-roll"} {...others} />);
}

export default Component;
