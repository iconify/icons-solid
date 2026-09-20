import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/q/qtxvqek9n.css';
import '../../css/i/if4rj7bxx.css';
import '../../css/y/y98e5yb6x.css';
import '../../css/o/otcpv5h_l.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="qtxvqek9n"/><path class="if4rj7bxx"/><path class="y98e5yb6x"/><path class="otcpv5h_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:gcp-light"} {...others} />);
}

export default Component;
