import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u3dz0ebsu.css';
import '../../css/e/ewajv7b-q.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><path class="u3dz0ebsu"/><path class="ewajv7b-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:folder-open-stroke-12"} {...others} />);
}

export default Component;
