import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jhf0v4-jb.css';
import '../../css/l/lyfzl0b8c.css';
import '../../css/y/y_h9g_9rq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jhf0v4-jb"/><path class="lyfzl0b8c"/><path class="y_h9g_9rq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-linear"} {...others} />);
}

export default Component;
