import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o5whxw56e.css';
import '../../css/s/sh8otvbvv.css';
import '../../css/c/cn7t2o60y.css';
import '../../css/x/xhdjbzk-h.css';
import '../../css/w/wsljmtr8g.css';
import '../../css/x/x0f1kzbnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="o5whxw56e wm-shadow"/><path class="sh8otvbvv"/><path class="cn7t2o60y"/><path class="xhdjbzk-h"/><path class="wsljmtr8g"/><path class="x0f1kzbnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bookmark-check"} {...others} />);
}

export default Component;
