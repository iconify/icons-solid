import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p5fqw2b4w.css';
import '../../css/c/cfaurcn3g.css';
import '../../css/d/d-mw2bszs.css';
import '../../css/y/yhn6u5b9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="p5fqw2b4w wm-k"/><path class="cfaurcn3g wm-k"/><path class="d-mw2bszs wm-s"/><path class="yhn6u5b9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:paisley"} {...others} />);
}

export default Component;
