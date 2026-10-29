import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qttdqwb0h.css';
import '../../css/y/yrgiqhxka.css';
import '../../css/u/uq6pq445a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qttdqwb0h"/><path class="wm-a yrgiqhxka"/><path class="uq6pq445a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:workflow-duo"} {...others} />);
}

export default Component;
