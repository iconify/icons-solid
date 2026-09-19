import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktd21acbt.css';
import '../../css/o/o14py5b7r.css';
import '../../css/f/fl2utnblk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ktd21acbt"/><path class="o14py5b7r"/><path class="fl2utnblk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bookmarks-duo"} {...others} />);
}

export default Component;
