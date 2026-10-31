import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wclbmvj7k.css';
import '../../css/j/jv6v4bcpo.css';
import '../../css/j/j8jcyvb6e.css';
import '../../css/q/q2y2d_cqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wclbmvj7k wm-shadow"/><path class="jv6v4bcpo wm-shadow"/><path class="j8jcyvb6e"/><path class="q2y2d_cqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:shield-question"} {...others} />);
}

export default Component;
