import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l7l825xyg.css';
import '../../css/r/ra2aarbtt.css';
import '../../css/l/l-dl82p6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="l7l825xyg wm-k"/><path class="ra2aarbtt wm-a"/><path class="l-dl82p6a wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:copy-check"} {...others} />);
}

export default Component;
