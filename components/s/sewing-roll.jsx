import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v0rm_8b1g.css';
import '../../css/g/gbi6cgipz.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="v0rm_8b1g"/><path class="gbi6cgipz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:sewing-roll"} {...others} />);
}

export default Component;
