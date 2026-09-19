import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxlk_nblr.css';
import '../../css/s/sr6e6_bvi.css';
import '../../css/k/ktcv0ybny.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="hxlk_nblr"/><path class="sr6e6_bvi"/><path class="ktcv0ybny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:eye-1-slash-duo"} {...others} />);
}

export default Component;
