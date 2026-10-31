import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vlr3v6b7l.css';
import '../../css/r/rm-jgyn5b.css';
import '../../css/b/bf9t7sa0t.css';
import '../../css/w/ws23_ww2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vlr3v6b7l wm-shadow"/><path class="rm-jgyn5b"/><path class="bf9t7sa0t"/><path class="ws23_ww2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bread"} {...others} />);
}

export default Component;
