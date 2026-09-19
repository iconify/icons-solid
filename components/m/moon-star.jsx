import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mgteurj5l.css';
import '../../css/h/hupbp2dcz.css';

const viewBox = {"width":16,"height":17};
const content = `<g class="n1lsf0bnc"><path class="mgteurj5l"/><path class="hupbp2dcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:moon-star"} {...others} />);
}

export default Component;
