import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/f_fz8wbma.css';
import '../../css/s/sz0wabcsi.css';
import '../../css/w/wbn73qbge.css';
import '../../css/u/uneyfrblo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="f_fz8wbma wm-shadow"/><path class="sz0wabcsi wm-shadow"/><path class="wbn73qbge"/><path class="uneyfrblo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:book"} {...others} />);
}

export default Component;
