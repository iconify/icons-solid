import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/npjxebmka.css';
import '../../css/t/trmte6b8g.css';
import '../../css/j/jrob5sf-a.css';
import '../../css/g/goxh5gplb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="npjxebmka wm-shadow"/><path class="trmte6b8g"/><path class="jrob5sf-a wm-s"/><path class="goxh5gplb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:sparkler"} {...others} />);
}

export default Component;
