import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8m4x6buq.css';
import '../../css/e/e1lmk9bly.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="m8m4x6buq"/><path class="e1lmk9bly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:books-bold"} {...others} />);
}

export default Component;
