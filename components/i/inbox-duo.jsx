import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l89yb9bbr.css';
import '../../css/x/xs03ubb6l.css';
import '../../css/s/soujtab5z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="l89yb9bbr"/><path class="wm-a xs03ubb6l"/><path class="soujtab5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:inbox-duo"} {...others} />);
}

export default Component;
