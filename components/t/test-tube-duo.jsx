import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lsy6r8esb.css';
import '../../css/f/fjsedw-yo.css';
import '../../css/c/cfmykrbut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lsy6r8esb"/><path class="fjsedw-yo wm-a"/><path class="cfmykrbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:test-tube-duo"} {...others} />);
}

export default Component;
