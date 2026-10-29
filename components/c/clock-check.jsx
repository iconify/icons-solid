import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fuyz5hbco.css';
import '../../css/f/f78e21b0t.css';
import '../../css/l/lf-b92d3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fuyz5hbco"/><path class="f78e21b0t wm-a"/><path class="lf-b92d3v wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clock-check"} {...others} />);
}

export default Component;
