import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/oskyig9cv.css';
import '../../css/y/y2694knjk.css';
import '../../css/v/voy9v4bwh.css';
import '../../css/c/cjkx7wphc.css';
import '../../css/y/y53vev6ui.css';
import '../../css/i/i7vnqbc2b.css';
import '../../css/s/s7hum9b6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="oskyig9cv wm-shadow"/><path class="y2694knjk"/><path class="voy9v4bwh"/><path class="cjkx7wphc"/><path class="y53vev6ui"/><path class="i7vnqbc2b"/><path class="s7hum9b6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-man-beard"} {...others} />);
}

export default Component;
