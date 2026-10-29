import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wu-p0vb5s.css';
import '../../css/z/z6enqggrv.css';
import '../../css/v/vh1b5unvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wu-p0vb5s"/><path class="wm-a z6enqggrv"/><path class="vh1b5unvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:person-running-duo"} {...others} />);
}

export default Component;
