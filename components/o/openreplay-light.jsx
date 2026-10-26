import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as3pgvova.css';
import '../../css/g/gcjjsc2cx.css';

const viewBox = {"width":30,"height":30};
const content = `<g class="ft5dv1b6b"><path class="as3pgvova"/><path class="gcjjsc2cx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:openreplay-light"} {...others} />);
}

export default Component;
