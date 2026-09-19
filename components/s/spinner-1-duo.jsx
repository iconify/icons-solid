import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l60ko1b5p.css';
import '../../css/b/bodpbpkvz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="l60ko1b5p"/><path class="bodpbpkvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:spinner-1-duo"} {...others} />);
}

export default Component;
