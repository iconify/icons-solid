import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fa94b1h-d.css';
import '../../css/f/fgne4mbxx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="fa94b1h-d"/><path class="fgne4mbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:gift"} {...others} />);
}

export default Component;
