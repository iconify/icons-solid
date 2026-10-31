import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bcr238b2g.css';
import '../../css/w/wralrjbwo.css';
import '../../css/j/jqut9wbth.css';
import '../../css/k/kycu3_36i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bcr238b2g wm-shadow"/><path class="wralrjbwo"/><path class="jqut9wbth"/><path class="kycu3_36i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:burger"} {...others} />);
}

export default Component;
