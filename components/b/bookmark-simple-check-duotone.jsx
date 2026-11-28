import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sfrsbo-eu.css';
import '../../css/z/zu_8vob7n.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="sfrsbo-eu"/><path class="zu_8vob7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:bookmark-simple-check-duotone"} {...others} />);
}

export default Component;
