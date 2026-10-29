import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qi9j3qbbt.css';
import '../../css/x/xx2uf6brd.css';
import '../../css/f/fnqqe5b5e.css';
import '../../css/o/oavb46-pc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qi9j3qbbt"/><path class="wm-a xx2uf6brd"/><path class="fnqqe5b5e"/><path class="oavb46-pc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trash-duo"} {...others} />);
}

export default Component;
