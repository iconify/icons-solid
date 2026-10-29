import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sjaga7_cv.css';
import '../../css/d/dilnqob0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sjaga7_cv"/><path class="dilnqob0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:water-balloon"} {...others} />);
}

export default Component;
