import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s2fz9egoh.css';
import '../../css/g/g3nmz-gyl.css';
import '../../css/x/x50k7-sev.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="s2fz9egoh"/><path class="g3nmz-gyl"/><path class="x50k7-sev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:book"} {...others} />);
}

export default Component;
