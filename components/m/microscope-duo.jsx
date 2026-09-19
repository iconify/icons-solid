import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umiew1fte.css';
import '../../css/z/zr64ovb5b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="umiew1fte"/><path class="zr64ovb5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:microscope-duo"} {...others} />);
}

export default Component;
