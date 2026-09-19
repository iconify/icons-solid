import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iy-a0yfme.css';
import '../../css/c/ciu_fp-bl.css';
import '../../css/e/em04m3bua.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="iy-a0yfme"/><path class="ciu_fp-bl"/><path class="em04m3bua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heartbreak-duo"} {...others} />);
}

export default Component;
