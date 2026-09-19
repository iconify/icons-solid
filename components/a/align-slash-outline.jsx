import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5oeg-s5z.css';
import '../../css/e/exsrkup2v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="z5oeg-s5z"/><path class="exsrkup2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:align-slash-outline"} {...others} />);
}

export default Component;
