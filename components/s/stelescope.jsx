import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rzglgbban.css';
import '../../css/k/kxheq592p.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="rzglgbban"/><path class="kxheq592p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:stelescope"} {...others} />);
}

export default Component;
