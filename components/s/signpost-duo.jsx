import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u1jdk2vpr.css';
import '../../css/e/e--mbmb3x.css';
import '../../css/d/d59m1yvcb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="u1jdk2vpr"/><path class="e--mbmb3x wm-a"/><path class="d59m1yvcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:signpost-duo"} {...others} />);
}

export default Component;
