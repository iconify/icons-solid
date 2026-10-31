import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jjv2kpbta.css';
import '../../css/n/nj3baebej.css';
import '../../css/s/sp6vbkbyx.css';
import '../../css/d/dgnq8mbcp.css';
import '../../css/s/svy_2tb6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="jjv2kpbta wm-shadow"/><path class="nj3baebej wm-shadow"/><path class="sp6vbkbyx"/><path class="dgnq8mbcp"/><path class="svy_2tb6z wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:unplug"} {...others} />);
}

export default Component;
