import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7vnnri4v.css';
import '../../css/c/ci7wbvb4k.css';
import '../../css/a/aol4a8b2f.css';
import '../../css/w/w2yiwxbqg.css';
import '../../css/b/bcr3eobbb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="m7vnnri4v"/><path class="ci7wbvb4k"/><path class="aol4a8b2f"/><path class="w2yiwxbqg"/><path class="bcr3eobbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bells-duo"} {...others} />);
}

export default Component;
