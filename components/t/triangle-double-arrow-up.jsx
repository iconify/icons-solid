import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v1dlfbb5m.css';
import '../../css/i/iy7wambnn.css';

const viewBox = {"width":16,"height":17};
const content = `<g class="n1lsf0bnc"><path class="v1dlfbb5m"/><path class="iy7wambnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:triangle-double-arrow-up"} {...others} />);
}

export default Component;
