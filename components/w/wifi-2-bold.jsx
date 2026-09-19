import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/auva-r99b.css';
import '../../css/u/utm6-8piu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><circle class="auva-r99b"/><path class="utm6-8piu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:wifi-2-bold"} {...others} />);
}

export default Component;
