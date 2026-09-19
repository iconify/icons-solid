import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uw5t6o7sg.css';
import '../../css/b/bgej-bcgz.css';
import '../../css/u/u2zzmjbeo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uw5t6o7sg"/><path clip-rule="evenodd" class="bgej-bcgz"/><path class="u2zzmjbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:copy"} {...others} />);
}

export default Component;
