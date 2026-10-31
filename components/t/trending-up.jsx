import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dda7lqbgk.css';
import '../../css/m/mav1xqfkd.css';
import '../../css/w/wnveq1bjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dda7lqbgk wm-k"/><path class="mav1xqfkd wm-a"/><path class="wm-deco wnveq1bjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:trending-up"} {...others} />);
}

export default Component;
