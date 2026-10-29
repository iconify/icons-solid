import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r9ee07b4q.css';
import '../../css/m/mo4d7k32t.css';
import '../../css/c/cbq31zbeo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="r9ee07b4q wm-k"/><path class="mo4d7k32t wm-a"/><path class="cbq31zbeo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:stamp"} {...others} />);
}

export default Component;
