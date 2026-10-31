import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vtez2z40b.css';
import '../../css/q/q0bdk4i-f.css';
import '../../css/j/j5c-72bro.css';
import '../../css/t/t72t-tsgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vtez2z40b wm-shadow"/><path class="q0bdk4i-f wm-shadow"/><path class="j5c-72bro"/><path class="t72t-tsgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bed"} {...others} />);
}

export default Component;
