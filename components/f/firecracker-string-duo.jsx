import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nbw4ebcyb.css';
import '../../css/v/vt-2nu9uw.css';
import '../../css/z/zy9xw0nee.css';
import '../../css/g/g2ivodb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="nbw4ebcyb"/><path class="vt-2nu9uw wm-s"/><path class="wm-a zy9xw0nee"/><path class="g2ivodb2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:firecracker-string-duo"} {...others} />);
}

export default Component;
