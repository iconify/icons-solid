import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/auva-r99b.css';
import '../../css/z/zvdqgza0h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><circle class="auva-r99b"/><path class="zvdqgza0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:wifi-1-bold"} {...others} />);
}

export default Component;
