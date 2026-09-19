import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yyujz5s4d.css';
import '../../css/i/i3u747t-o.css';
import '../../css/h/h_1lnosyr.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="yyujz5s4d"/><path class="i3u747t-o"/><path class="h_1lnosyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:disc-upload"} {...others} />);
}

export default Component;
