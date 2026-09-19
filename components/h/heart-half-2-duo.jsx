import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncjytp73c.css';
import '../../css/z/z5waj9zlf.css';
import '../../css/z/zmkdzsyhk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ncjytp73c"/><path class="z5waj9zlf"/><path class="zmkdzsyhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heart-half-2-duo"} {...others} />);
}

export default Component;
