import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/ybg2dackn.css';
import '../../css/e/en8q3nbhr.css';
import '../../css/n/nej7cibnr.css';
import '../../css/v/v-2onvirn.css';
import '../../css/o/or1ysf0pr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow ybg2dackn"/><path class="en8q3nbhr wm-shadow"/><path class="nej7cibnr"/><path class="v-2onvirn"/><path class="or1ysf0pr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:virus"} {...others} />);
}

export default Component;
