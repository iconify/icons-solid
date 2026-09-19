import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z19unwb7b.css';
import '../../css/e/e32c4qbbt.css';
import '../../css/u/u-jiawfxg.css';
import '../../css/d/d90c-y1wv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="z19unwb7b"/><path class="e32c4qbbt"/><path class="u-jiawfxg"/><path class="d90c-y1wv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:toggle-duo"} {...others} />);
}

export default Component;
