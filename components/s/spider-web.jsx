import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i5-20q0_t.css';
import '../../css/r/rdktr3xsg.css';
import '../../css/f/f61_c6nui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="i5-20q0_t wm-shadow"/><path class="rdktr3xsg wm-shadow"/><path class="f61_c6nui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:spider-web"} {...others} />);
}

export default Component;
