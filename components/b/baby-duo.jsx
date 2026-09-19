import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc1vwlbob.css';
import '../../css/k/kolzgkbfi.css';
import '../../css/b/b-l6jb-8j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="sc1vwlbob"/><path class="kolzgkbfi"/><path class="b-l6jb-8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:baby-duo"} {...others} />);
}

export default Component;
